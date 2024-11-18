import { match } from '@formatjs/intl-localematcher'
import {NextRequest, NextResponse} from "next/server";
import Negotiator from 'negotiator'
import {defaultLocale, locales} from "@/app/globals";

// Get the preferred locale
function getLocale(request: NextRequest): string {
	const headers: { [key: string]: string } = {};
	request.headers.forEach((v, k) => {
		headers[k] = v;
	});
	const languages = new Negotiator({ headers }).languages()

	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next).*)',
	],
}

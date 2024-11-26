import "./globals.css";
import {getDictionary} from "@/app/[lang]/dictionaries";
import DarkModeSwitch from "@/app/components/dark-mode-switch";
import LanguageSwitch from "@/app/components/language-switch";
import {defaultLocale, locales} from "@/app/globals";

export async function generateMetadata({ params }: {params: Promise<{lang: string}>}) {
	const { lang } = await params;
	const dict = await getDictionary(lang || defaultLocale)

	return {
		title: dict.title
	};
}

export async function generateStaticParams() {
	return locales.map(e => ({lang: e}))
}

export default async function RootLayout({ children }:
	Readonly<{children: React.ReactNode}>) {

	return (
        <html data-theme='dark'>
        <body>
        {children}
		<DarkModeSwitch/>
		<LanguageSwitch/>
        </body>
        </html>
    );
}

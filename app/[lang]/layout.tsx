import "../globals.css";
import {getDictionary} from "@/app/[lang]/dictionaries";

export async function generateMetadata({ params }: {params: Promise<{lang: string}>}) {
	const { lang } = await params;
	const dict = await getDictionary(lang)

	return {
		title: dict.title
	};
}

export async function generateStaticParams() {
	return [{ lang: 'en-US' }, { lang: 'ru-RU' }]
}

export default async function RootLayout({ children, params }:
	Readonly<{children: React.ReactNode; params: Promise<{lang: string}>}>) {
	const { lang } = await params;

	return (
        <html lang={lang}>
        <body>
        {children}
        </body>
        </html>
    );
}

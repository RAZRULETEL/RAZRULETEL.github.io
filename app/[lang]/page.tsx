import styles from './page.module.css';
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({ params }: { params: Promise<{lang: string}> }) {
	const { lang } = await params;
	const dict = await getDictionary(lang)

	return (
		<>
		</>
	);
}

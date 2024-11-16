import {getDictionary} from "@/app/[lang]/dictionaries";
import MainScreen from "@/app/[lang]/screens/main";
import footer_waves from "@/public/footer-waves.svg";

export default async function Home({params}: { params: Promise<{ lang: string }> }) {
	const {lang} = await params;
	const dict = await getDictionary(lang);

	return (
		<>
			<MainScreen dict={dict}/>
			<footer><img src={footer_waves.src}/></footer>
		</>
	);
}

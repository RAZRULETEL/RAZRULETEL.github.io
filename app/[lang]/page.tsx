import {getDictionary} from "@/app/[lang]/dictionaries";
import MainScreen from "@/app/[lang]/screens/main";
import footer_waves from "@/public/footer-waves.svg";
import ProjectsScreen from "@/app/[lang]/screens/projects";
import WorkExperienceScreen from "@/app/[lang]/screens/resume";
import ContactsScreen from "@/app/[lang]/screens/contacts";
import SkillsScreen from "@/app/[lang]/screens/skills";
import {defaultLocale} from "@/app/globals";

export default async function Home({params}: { params: Promise<{ lang: string }> }) {
	const {lang} = await params;
	console.log(lang || defaultLocale)
	const dict = await getDictionary(lang || defaultLocale);

	return (
		<>
			<MainScreen dict={dict}/>
			<ProjectsScreen dict={dict}/>
			<WorkExperienceScreen dict={dict}/>
			<SkillsScreen dict={dict}/>
			<ContactsScreen dict={dict}/>
			<footer style={{display: 'flex'}}><img src={footer_waves.src}/></footer>
		</>
	);
}

'use client';
import styles from "@/app/[lang]/page.module.css";
import useAnimation from "@/app/components/use-animation";
import react_logo from "@/public/skills/react.png";
import nextjs_logo from "@/public/skills/nextjs.png";
import typescript_logo from "@/public/skills/typescript.png";
import git_logo from "@/public/skills/git.png";
import java_logo from "@/public/skills/java.png";
import docker_logo from "@/public/skills/docker.png";
import postgresql_logo from "@/public/skills/postgresql.png";
// import _logo from "@/public/skills/";

const LOGOS = [react_logo, nextjs_logo, typescript_logo, git_logo, java_logo, docker_logo, postgresql_logo];
export default function SkillsScreen({dict}: { dict: { [key: string]: string } }) {
	const animateSection = useAnimation();
	const animateCards = useAnimation();

	return (
		<section className={styles.skills} ref={animateSection}>
			<h2 className={styles.section_title}>{dict.skills__title}</h2>
			<div className={styles.skills__grid} ref={animateCards}>
				{LOGOS.map(e => <SkillCard key={e.src} img={e.src}/>)}
			</div>
		</section>
	)
}

function SkillCard({img}: { img: string }) {
	return (
		<div className={styles.skills__card}>
			<img src={img}/>
		</div>
	)
}

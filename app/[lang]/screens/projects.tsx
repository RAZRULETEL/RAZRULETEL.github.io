'use client';
import styles from "./../page.module.css";
import ProjectView from "@/app/components/project-view";
import aitip_main from "@/public/projects/aitip_main.png";
import foodate_main from "@/public/projects/foodate_main.png";
import {useEffect, useRef} from "react";
import {ANIMATION_OFFSET} from "@/app/globals";

export default function ProjectsScreen({dict}: { dict: { [key: string]: string } }) {
	const section = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!section.current) return;
		const sectionEl = section.current;

		const scrollListener = () => {
			for (const child of sectionEl.children) {
				const screenOffsetTop = sectionEl.getBoundingClientRect().y
					+ (child as HTMLElement).offsetTop
					- window.innerHeight;
				if (screenOffsetTop + ANIMATION_OFFSET < 0) {
					child.classList.add(styles.section_active);
				} else {
					child.classList.remove(styles.section_active);
				}
			}
		}
		scrollListener();
		window.addEventListener('scroll', scrollListener);
		return () => window.removeEventListener('scroll', scrollListener);
	}, [section]);


	return (
		<section className={styles.projects} ref={section}>
			<h2 className={styles.section_title + ' ' + styles.projects__title}>{dict.my_projects}</h2>
			<ProjectView img={aitip_main.src} title={dict.aitip} accentColor='blue'>
				<p className={styles.projects__text}>{dict.aitip_about}</p>
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
					<a href='https://github.com/Intention-man/new_aitip_site' className={styles.projects__visit}>GitHub →</a>
					<a href='https://vk.com/wall-115604474_1397' className={styles.projects__visit}>{dict.post_in} VK →</a>
				</div>
			</ProjectView>
			<ProjectView img={foodate_main.src} title={dict.foodate} direction={'row-reverse'} accentColor='#269926'>
				<p className={styles.projects__text}>{dict.foodate_about}</p>
				<a href='https://foodate.ru' className={styles.projects__visit}>{dict.visit + ' →'}</a>
			</ProjectView>
		</section>
	)
}

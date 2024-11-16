'use client';
import styles from "@/app/[lang]/page.module.css";
import {useEffect, useRef} from "react";

const ANIMATION_OFFSET = 100;

export default function AboutMeScreen({dict}: { dict: { [key: string]: string } }) {
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
		<section className={styles.about_me} ref={section}>
			<h2 className={styles.section_title}>{dict.about_me__title}</h2>
			<div className={styles.about_me__text}>
				{dict.about_me}
			</div>
		</section>
	)
}

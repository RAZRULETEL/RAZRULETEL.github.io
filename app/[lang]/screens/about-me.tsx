'use client';
import styles from "@/app/[lang]/page.module.css";
import useAnimation from "@/app/components/use-animation";

export default function AboutMeScreen({dict}: { dict: { [key: string]: string } }) {
	const animateSection = useAnimation();

	return (
		<section className={styles.about_me} ref={animateSection}>
			<h2 className={styles.section_title}>{dict.about_me__title}</h2>
			<div className={styles.about_me__text}>
				{dict.about_me}
			</div>
		</section>
	)
}

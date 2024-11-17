'use client';
import styles from "@/app/[lang]/page.module.css";
import useAnimation from "@/app/components/use-animation";
import github_logo from "@/public/github.svg";
import email_logo from "@/public/email.svg";
import telegram_logo from "@/public/telegram.svg";

export default function ContactsScreen({dict}: { dict: { [key: string]: string } }) {
	const animateSection = useAnimation();

	return (
		<section className={styles.contacts} ref={animateSection}>
			<h2 className={styles.section_title}>{dict.contacts__title}</h2>
			<div className={styles.contacts__container}>
				<a target="_blank" href="https://github.com/RAZRULETEL" className={styles.contacts__github}><p>GitHub</p><img src={github_logo.src}/></a>
				<a target="_blank" className={styles.contacts__telegram}><p>Telegram</p><img src={telegram_logo.src}/></a>
				<a target="_blank" href="mailto:qwerty.qwertlain@gmail.com" className={styles.contacts__email}><p>Email</p><img src={email_logo.src}/></a>
			</div>
		</section>
	)
}

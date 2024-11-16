import styles from "@/app/[lang]/page.module.css";
import Typer from "@/app/components/typer";
import github_logo from "@/public/github.svg";
import email_logo from "@/public/email.svg";
import telegram_logo from "@/public/telegram.svg";
import resume_logo from "@/public/resume.svg";


export default function MainScreen({dict}: { dict: { [key: string]: string } }) {
	return (
		<section className={styles.main}>
			<h1 className={styles.title}>{dict.full_name}</h1>
			<p className={styles.description}>{dict.first_person + ' '}
				<span className={styles.typer}>
						<Typer texts={[dict.specialization_1, dict.specialization_2]} speedCPS={12} delay={500}/>
						<span className={styles.cursor}>|</span>
					</span>
			</p>
			<div className={styles.links}>
				<a href="https://github.com/RAZRULETEL" title="GitHub"><img src={github_logo.src} alt="GitHub"/></a>
				<a href="mailto:qwerty.qwertlain@gmail.com" title="Email">
					<img src={email_logo.src} alt="Email"/>
				</a>
				<a href="https://t.me/razruletel" title="Telegram"><img src={telegram_logo.src} alt="Telegram"/></a>
				<a href="https://drive.google.com/file/d/1INXt5KoztVIIWWyVNkRyEYRPsOmNqrFw/view?usp=drive_link"
				   title="Resume"><img src={resume_logo.src} alt="Resume"/></a>
			</div>
			<div className={styles.main__rect1}></div>
			<div className={styles.main__rect2}></div>
		</section>
	)
}

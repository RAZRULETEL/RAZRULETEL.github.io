'use client';
import styles from "@/app/[lang]/page.module.css";
import ResumeCard from "@/app/components/resume-card";
import useAnimation from "@/app/components/use-animation";

export default function WorkExperienceScreen({dict}: { dict: { [key: string]: string } }) {
	const animateSection = useAnimation();
	const animateColumn1 = useAnimation();
	const animateColumn2 = useAnimation();

	return (
		<section className={styles.resume} ref={animateSection}>
			<h2 className={styles.section_title} style={{gridColumn: 'span 2'}}>{dict.resume__title}</h2>
			<div className={styles.resume__column} ref={animateColumn1}>
				<h5 className={styles.resume__discipline_name}>{dict.education}</h5>
				<ResumeCard title={dict.education__specialization}
							dates='2022 - 2026' description={dict.education__university}/>

				<h5 className={styles.resume__discipline_name}>{dict.achievements}</h5>
				<ResumeCard title={dict.codewars_rank}
							dates={'04.2022 - ' + dict.present}
							description={<a className={styles.resume__link} style={{wordBreak: 'break-word'}}
											href="https://www.codewars.com/users/RAZRULETEL">https://www.codewars.com/users/RAZRULETEL</a>}/>
				<ResumeCard title={dict.sport_section_manager}
							dates={'02.2024 - ' + dict.present}
							description={<span style={{fontWeight: 'normal'}}>{dict.sport_section_manager__description}</span>}/>
				<ResumeCard title={dict.university}
							dates={'2022 - ' + dict.present}
							description={<span style={{fontWeight: 'normal'}}>{dict.university_discipline__description}</span>}/>
			</div>
			<div className={styles.resume__column} ref={animateColumn2}>
				<h5 className={styles.resume__discipline_name}>{dict.work_experience}</h5>
				<ResumeCard title={dict.fullstack_dev} dates='07.2024 - 10.2024'
							achievements={[dict.allsee_achievement_1, dict.allsee_achievement_2, dict.allsee_achievement_3]}
							description={<>AllSee, <a className={styles.resume__link}
													  href="https://allsee.team/">allsee.team</a></>}
				/>
				<ResumeCard title={dict.frontend_dev} dates='02.2024 - 06.2024'
							achievements={[dict.foodate_achievement_1, dict.foodate_achievement_2, dict.foodate_achievement_3, dict.foodate_achievement_4]}
							description={<>FooDate, <a className={styles.resume__link}
													   href="https://foodate.ru/">foodate.ru</a></>}
				/>
				<ResumeCard title={dict.frontend_dev} dates='03.2023 - 07.2023'
							achievements={[dict.aitip_achievement_1, dict.aitip_achievement_2, dict.aitip_achievement_3, dict.aitip_achievement_4]}
							description={<>{dict.aitip}, <a className={styles.resume__link}
															href="https://github.com/Intention-man/new_aitip_site/">github.com/new_aitip_site</a></>}
				/>
			</div>
		</section>
	)
}

'use client';
import styles from '@/app/[lang]/page.module.css';
import ResumeCard from '@/app/components/resume-card';
import useAnimation from '@/app/components/use-animation';
import {Dict} from "@/app/globals";

interface ResumeItem {
	title: string;
	dates: string;
	description: React.ReactNode;
	achievements?: string[];
}

const EDUCATION_DATA: (dict: Dict) => ResumeItem[] = (dict) => [
	{
		title: dict.education__specialization,
		dates: '2022 - 2026',
		description: dict.education__university,
	},
]

const ACHIEVEMENTS_DATA: (dict: Dict) => ResumeItem[] = (dict) => [
	{
		title: dict.codewars_rank,
		dates: `04.2022 - ${dict.present}`,
		description: (
			<a
				className={styles.resume__link}
				href="https://www.codewars.com/users/RAZRULETEL "
				aria-label={dict.codewars_aria_label}
			>
				codewars.com/users/RAZRULETEL
			</a>
		),
	},
	{
		title: dict.sport_section_manager,
		dates: `02.2024 - ${dict.present}`,
		description: (
			<span className={styles.normal_weight}>
        {dict.sport_section_manager__description}
      </span>
		),
	},
	{
		title: dict.university,
		dates: `2022 - ${dict.present}`,
		description: (
			<span className={styles.normal_weight}>
        {dict.university_discipline__description}
      </span>
		),
	},
];

const WORK_EXPERIENCE_DATA = (dict: Dict) => [
	{
		title: dict.fullstack_dev,
		dates: '07.2024 - 10.2024',
		description: (
			<>
				AllSee,{' '}
				<a
					className={styles.resume__link}
					href="https://allsee.team/ "
					aria-label={dict.allsee_aria_label}
				>
					allsee.team
				</a>
			</>
		),
		achievements: [
			dict.allsee_achievement_1,
			dict.allsee_achievement_2,
			dict.allsee_achievement_3,
		],
	},
	{
		title: dict.frontend_dev,
		dates: '02.2024 - 06.2024',
		description: (
			<>
				FooDate,{' '}
				<a
					className={styles.resume__link}
					href="https://foodate.ru/ "
					aria-label={dict.foodate_aria_label}
				>
					foodate.ru
				</a>
			</>
		),
		achievements: [
			dict.foodate_achievement_1,
			dict.foodate_achievement_2,
			dict.foodate_achievement_3,
			dict.foodate_achievement_4,
		],
	},
	{
		title: dict.frontend_dev,
		dates: '03.2023 - 07.2023',
		description: (
			<>
				{dict.aitip},{' '}
				<a
					className={styles.resume__link}
					href="https://github.com/Intention-man/new_aitip_site/ "
					aria-label={dict.aitip_aria_label}
				>
					github.com/new_aitip_site
				</a>
			</>
		),
		achievements: [
			dict.aitip_achievement_1,
			dict.aitip_achievement_2,
			dict.aitip_achievement_3,
			dict.aitip_achievement_4,
		],
	},
];

export default function WorkExperienceScreen({dict}: { dict: { [key: string]: string } }) {
	const sectionRef = useAnimation();
	const column1Ref = useAnimation();
	const column2Ref = useAnimation();

	return (
		<section className={styles.resume} ref={sectionRef}>
			<h2 className={styles.section_title} style={{gridColumn: 'span 2'}}>{dict.resume__title}</h2>

			<div className={styles.resume__column} ref={column1Ref}>
				<h5 className={styles.resume__discipline_name}>{dict.education}</h5>
				{EDUCATION_DATA(dict).map((item) => (
					<ResumeCard
						key={item.title}
						title={item.title}
						dates={item.dates}
						description={item.description}
					/>
				))}

				<h5 className={styles.resume__discipline_name}>{dict.achievements}</h5>
				{ACHIEVEMENTS_DATA(dict).map((item, i) => (
					<ResumeCard
						key={i}
						title={item.title}
						dates={item.dates}
						description={item.description}
					/>
				))}
			</div>

			<div className={styles.resume__column} ref={column2Ref}>
				<h5 className={styles.resume__discipline_name}>{dict.work_experience}</h5>
				{WORK_EXPERIENCE_DATA(dict).map((item, i) => (
					<ResumeCard
						key={i}
						title={item.title}
						dates={item.dates}
						description={item.description}
						achievements={item.achievements}
					/>
				))}
			</div>
		</section>
	);
}

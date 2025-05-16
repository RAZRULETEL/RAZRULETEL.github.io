'use client';
import styles from '@/app/[lang]/page.module.css';
import ResumeCard from '@/app/components/resume-card';
import useAnimation from '@/app/components/use-animation';
import {Dict} from "@/app/globals";

interface ResumeItem {
	title: string;
	dateStart: string; // ISO date format
	dateEnd?: string;  // ISO date format or undefined for present
	dateShowYearOnly?: boolean
	description: React.ReactNode;
	achievements?: string[];
}


const EDUCATION_DATA = (dict: Dict): ResumeItem[] => [
	{
		title: dict.education__specialization,
		dateStart: '2022',
		dateEnd: '2026',
		dateShowYearOnly: true,
		description: dict.education__university,
	},
];

const ACHIEVEMENTS_DATA = (dict: Dict): ResumeItem[] => [
	{
		title: dict.codewars_rank,
		dateStart: '2022-04',
		description: (
			<a
				className={styles.work_experience__link}
				href="https://www.codewars.com/users/RAZRULETEL "
				aria-label={dict.codewars_aria_label}
			>
				codewars.com/users/RAZRULETEL
			</a>
		),
	},
	{
		title: dict.sport_section_manager,
		dateStart: '2024-02',
		description: (
			<span className={styles.normal_weight}>
        		{dict.sport_section_manager__description}
      		</span>
		),
	},
	{
		title: dict.university,
		dateStart: '2022',
		dateShowYearOnly: true,
		description: (
			<span className={styles.normal_weight}>
        		{dict.university_discipline__description}
      		</span>
		),
	},
];

const WORK_EXPERIENCE_DATA = (dict: Dict): ResumeItem[] => [
	{
		title: dict.fullstack_dev,
		dateStart: '2024-07',
		dateEnd: '2024-10',
		description: (
			<>
				AllSee,{' '}
				<a
					className={styles.work_experience__link}
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
		dateStart: '2024-02',
		dateEnd: '2024-06',
		description: (
			<>
				FooDate,{' '}
				<a
					className={styles.work_experience__link}
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
		dateStart: '2023-03',
		dateEnd: '2023-07',
		description: (
			<>
				{dict.aitip},{' '}
				<a
					className={styles.work_experience__link}
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

export default function WorkExperienceScreen({dict}: { dict: Dict }) {
	const sectionRef = useAnimation();
	const column1Ref = useAnimation();
	const column2Ref = useAnimation();

	const dateFormatter = new Intl.DateTimeFormat(dict.locale, {
		year: "numeric",
		month: "numeric",
	})

	const resumeCardRenderer = (itemsGetter: (dict: Dict) => ResumeItem[]) => (
		itemsGetter(dict).map((item, i) => {
			let firstDate: string = '';
			let secondDate: string = '';
			if (item.dateShowYearOnly) {
				firstDate = new Date(item.dateStart).getFullYear().toString();
				secondDate = item.dateEnd ? new Date(item.dateEnd).getFullYear().toString() : dict.present;
			} else {
				firstDate = dateFormatter.format(new Date(item.dateStart));
				secondDate = item.dateEnd ? dateFormatter.format(new Date(item.dateEnd)) : dict.present;
			}
			return (<ResumeCard
				key={i}
				title={item.title}
				dates={`${firstDate} - ${secondDate}`}
				description={item.description}
				achievements={item.achievements}
			/>)
		})
	);

	return (
		<section className={styles.work_experience} ref={sectionRef}>
			<h2 className={styles.section_title + ' ' + styles.work_experience__title}>{dict.work_experience__title}</h2>

			<div className={styles.work_experience__column} ref={column1Ref}>
				<h5 className={styles.work_experience__discipline_name}>{dict.education}</h5>
				{resumeCardRenderer(EDUCATION_DATA)}

				<h5 className={styles.work_experience__discipline_name}>{dict.achievements}</h5>
				{resumeCardRenderer(ACHIEVEMENTS_DATA)}
			</div>

			<div className={styles.work_experience__column} ref={column2Ref}>
				<h5 className={styles.work_experience__discipline_name}>{dict.work_experience}</h5>
				{resumeCardRenderer(WORK_EXPERIENCE_DATA)}
			</div>
		</section>
	);
}

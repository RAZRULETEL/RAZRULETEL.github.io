import styles from './resume-card.module.css'
import React from "react";

export default function ResumeCard({title, dates, description, achievements, style}:
									   { title: string, dates: string, description: React.ReactNode, achievements?: string[], style?: React.CSSProperties }) {


	return (
		<div className={styles.resume_card} style={style}>
			<div className={styles.resume_card__path}></div>
			<div className={styles.resume_card__content}>
				<p className={styles.resume_card__title}>{title}</p>
				<p className={styles.resume_card__dates}>{dates}</p>
				<p className={styles.resume_card__description}>{description}</p>
				{achievements && <ul className={styles.resume_card__achievements_list}>
					{achievements?.map(achievement => <li key={achievement}>{achievement}</li>)}
				</ul>}
			</div>
		</div>
	)
}

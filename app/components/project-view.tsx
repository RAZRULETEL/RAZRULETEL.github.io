import styles from "./project-view.module.css";
import React from "react";

export default function ProjectView({img, children, title, direction = 'row', accentColor}:
{ img: string, children: React.ReactNode, title: string, direction?: 'row' | 'row-reverse', accentColor?: string }) {

	return (
		<div className={styles.project_view} style={{flexDirection: direction, '--accent-color': accentColor || ''} as React.CSSProperties}>
			<div className={styles.image + ' ' + (direction === 'row-reverse' ? styles.image_reverse : '')}>
				<img src={img} alt=""/>
			</div>
			<div className={styles.content}>
				<h5 className={styles.content__title}>{title}</h5>
				{children}
			</div>
		</div>
	)
}

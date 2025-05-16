'use client'
import styles from "./project-view.module.css";
import React, {useRef} from "react";

export default function ProjectView({img, children, title, direction = 'row', accentColor}:
										{
											img: string,
											children: React.ReactNode,
											title: string,
											direction?: 'row' | 'row-reverse',
											accentColor?: string
										}) {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.project_view
			+ ' ' + (direction == 'row' ? styles.project_view_reverse : '')}
			 ref={containerRef}
			 style={{'--accent-color': accentColor || ''} as React.CSSProperties}>
			<div className={styles.image
				+ ' ' + (direction === 'row-reverse' ? styles.image_reverse : '')}
				 onClick={() => {
					 if (containerRef.current) {
						 if (containerRef.current.classList.contains(styles.project_view_preview)) {
							 containerRef.current.classList.remove(styles.project_view_preview);
						 } else {
							 containerRef.current.classList.add(styles.project_view_preview);
						 }
					 }
				 }}>
				<img src={img} alt=""/>
			</div>
			<div className={styles.content}>
				<h5 className={styles.content__title}>{title}</h5>
				{children}
			</div>
		</div>
	)
}

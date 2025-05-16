'use client';
import {useEffect, useRef} from "react";
import {ANIMATION_OFFSET} from "@/app/globals";
import styles from "@/app/[lang]/page.module.css";

export default function useAnimation(){
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		const sectionEl = ref.current;

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
	}, [ref]);

	return ref
}

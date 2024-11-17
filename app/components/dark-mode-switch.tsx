'use client'
import {useLayoutEffect, useState} from "react";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";


export default function DarkModeSwitch() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useLayoutEffect(() => {
		if (window.matchMedia)
			setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
	}, []);

	useLayoutEffect(() => {
		if (isDarkMode) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}, [isDarkMode]);

	return (
		<div style={{
			position: 'fixed',
			left: '0',
			bottom: '10%',
			width: '50px',
			height: '50px',
			background: 'var(--foreground)',
			zIndex: '10',
			padding: '7px',
			borderRadius: '0 50% 50% 0',
			cursor: 'pointer',
			boxShadow: '0 0 20px 0 var(--foreground)'
		}} onClick={() => setIsDarkMode(e => !e)}>
			<img src={isDarkMode ? moon.src : sun.src}
				 style={{width: '100%', height: '100%', filter: `invert(${+!isDarkMode})`}} alt={isDarkMode ? 'dark' : 'light'}/>
		</div>
	)
}

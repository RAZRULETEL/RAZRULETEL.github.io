'use client';
import {useEffect, useState} from "react";


export default function Typer({ texts, speedCPS = 5, delay = 100 }: { texts: string[]; speedCPS?: number; delay?: number }) {
	const [typedText, setTypedText] = useState('');


	useEffect(() => {
		let charIndex = 0;
		let textIndex = 0;
		let waitUntil = 0;

		const interval = setInterval(() => {
			if(Date.now() < waitUntil)
				return;

			if (charIndex < texts[textIndex].length) {
				setTypedText(texts[textIndex].slice(0, charIndex + 1));
				charIndex++;

				if(charIndex == texts[textIndex].length)
					waitUntil = Date.now() + delay;
			} else if(charIndex < texts[textIndex].length * 2) {
				setTypedText(text => text.slice(0, -1));
				charIndex++;
			} else {
				textIndex = (textIndex + 1) % texts.length;
				charIndex = 0;
				setTypedText('');
				waitUntil = Date.now() + delay;
			}
		}, 1000 / speedCPS);
		return () => clearInterval(interval);
	}, []);

	return <>{typedText}</>;
}

import {defaultLocale, locales} from "@/app/globals";
import styles from "./language-switch.module.css";
import globe from "@/public/globe.svg";
import {Fragment} from "react";


export default function LanguageSwitch({lang = defaultLocale}: { lang?: string }) {

	return (
		<div className={styles.language_switch}>
			<img className={styles.language_switch__globe} src={globe.src} />
			{locales.map((locale, i) =>
				<Fragment key={i}>
					<a key={locale}
					   href={`/${locale}`}
					   className={styles.language + (locale === lang ? ' ' + styles.language_selected : '')}
					>{locales.filter(e => e.startsWith(locale.split('-')[0])).length > 1 ? locale : locale.split('-')[0]}</a>
					{i != locales.length - 1 && <span>/</span>}
				</Fragment>
			)}
		</div>
	)
}

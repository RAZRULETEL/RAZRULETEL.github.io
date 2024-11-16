import 'server-only'

const dictionaries: { [key: string]: () => Promise<{ [key: string]: string }> } = {
	"en-US": () => import('./../../dictionaries/en.json').then((module) => module.default as { [key: string]: string }),
	"ru-RU": () => import('./../../dictionaries/ru.json').then((module) => module.default as { [key: string]: string }),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()


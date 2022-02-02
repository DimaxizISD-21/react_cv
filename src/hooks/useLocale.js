import { useContext, useEffect } from 'react';
import { AppContext } from '../providers/context';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LOCALES } from '../providers/i18';

export const useLocale = () => {
	const { state, setState } = useContext(AppContext);
	const [locale, setLocale] = useLocalStorage('locale', undefined);

	const currentlocale = locale === undefined ? state.locale : locale;

	const locales = [
		{ name: LOCALES.UKRANIAN },
		{ name: LOCALES.RUSSIAN },
		{ name: LOCALES.ENGLISH },
	];

	const onSetLocale = (locale) => {
		setState((prev) => ({
			...prev,
			locale,
		}));
		setLocale(locale);
	};

	useEffect(() => {
		if (currentlocale) {
			setState((prev) => ({
				...prev,
				locale: currentlocale,
			}));
		}
	}, [setState, currentlocale]);

	return { locales, currentlocale, onSetLocale };
};

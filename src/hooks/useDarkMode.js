import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const prefersTheme = '';
	const [isEnabled, setIsEnabled] = useLocalStorage('dark-mode', undefined);
	const enabled = isEnabled === undefined ? prefersTheme : isEnabled;

	useEffect(() => {
		if (window === undefined) return;
		const root = window.document.documentElement;
		root.classList.remove(enabled ? 'light' : 'dark');
		root.classList.add(enabled ? 'dark' : 'light');
	}, [enabled]);

	return [enabled, setIsEnabled];
};

import { useDarkMode } from '../../hooks/useDarkMode';

const ThemeToggle = () => {
	const [isDark, setIsDark] = useDarkMode();

	const style = isDark ? 'toggle-theme bx bx-sun' : 'toggle-theme bx bx-moon';

	return (
		<button
			id='theme-button'
			onClick={() => setIsDark(!isDark)}
			title='Change theme'
		>
			<i className={style} />
		</button>
	);
};

export default ThemeToggle;

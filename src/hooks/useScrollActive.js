import { useCallback, useEffect, useState } from 'react';

export const useScrollActive = () => {
	const [scrollActive, setScrollActive] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = useCallback(
		() => setScrollPosition(window.pageYOffset),
		[]
	);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		if (scrollPosition >= 300 && window.innerWidth <= 1020) {
			setScrollActive(true);
		} else {
			setScrollActive(false);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition, handleScroll]);

	return { scrollActive };
};

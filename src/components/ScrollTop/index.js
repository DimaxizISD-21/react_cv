import { animateScroll } from 'react-scroll';
import { useScrollActive } from '../../hooks/useScrollActive';

const ScrollTop = () => {
	const { scrollActive } = useScrollActive();
	const styles = scrollActive ? 'scrolltop scrolltop-active' : 'scrolltop';
	const onScrollTop = () => animateScroll.scrollToTop();

	return (
		<button className={styles} id='scrolltop' onClick={onScrollTop}>
			<i className='bx bx-up-arrow-alt scrolltop-icon'></i>
		</button>
	);
};

export default ScrollTop;

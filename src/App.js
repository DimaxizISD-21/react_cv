import MainWrapper from './components/MainWrapper';
import Navbar from './components/Navbar';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import ScrollTop from './components/ScrollTop';

import './styles/index.scss';

const App = () => {
	return (
		<MainWrapper>
			<Navbar />
			<MainLeft />
			<MainRight />
			<ScrollTop />
		</MainWrapper>
	);
};

export default App;

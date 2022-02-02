import Experience from './Experience';
import Certificates from './Certificates';
import Cources from './Cources';
import Languages from './Languages';
import Interests from './Interests';

const MainRight = () => {
	return (
		<div className='main-right'>
			<Experience />
			<Certificates />
			<Cources />
			<Languages />
			<Interests />
		</div>
	);
};

export default MainRight;

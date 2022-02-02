import logo from '../../../assets/img/logo.jpg';
import LanguageToggle from '../../LanguageToggle';
import ThemeToggle from '../../ThemeToggle';
import { FormattedMessage } from 'react-intl';

const Home = () => {
	return (
		<section className='home' id='home'>
			<div className='home-wrapper'>
				<div className='home-data'>
					<img className='home-photo' src={logo} alt='logo' />
					<h1 className='home-title'>
						{<FormattedMessage id='home.title' />}{' '}
					</h1>
					<h3 className='home-profession'>Junior Frontend Developer</h3>
				</div>
				<div className='home-address'>
					<span className='home-information'>
						<i className='home-icon bx bx-map'></i>
						{<FormattedMessage id='home.address' />}
					</span>
					<span className='home-information'>
						<i className='home-icon bx bx-envelope'></i>
						alexey.nikolaenko999@gmail.com
					</span>
					<span className='home-information'>
						<i className='home-icon bx bx-phone'></i>
						+380---------
					</span>
				</div>
				<ThemeToggle />
				<LanguageToggle />

				<i
					className='toggle-download bx bx-download'
					title='Download CV'
					id='theme-button'
					onClick={() => window.print()}
				></i>
			</div>
		</section>
	);
};

export default Home;

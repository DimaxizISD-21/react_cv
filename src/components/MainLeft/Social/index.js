import { FormattedMessage } from 'react-intl';

const Social = () => {
	return (
		<section className='social section' id='social'>
			<h2 className='section-title'>
				{<FormattedMessage id='social.section-title' />}
			</h2>
			<div className='social-container'>
				<a
					href='https://github.com/DimaxizISD-21/'
					className='social-link'
					target='_blank'
					rel='noreferrer'
				>
					<i className='bx bxl-github social-icon'></i>Github
				</a>
				<a
					href='https://t.me/DoZoR_MO'
					className='social-link'
					target='_blank'
					rel='noreferrer'
				>
					<i className='bx bxl-telegram social-icon'></i>Telegram
				</a>
				<a
					href='https://www.linkedin.com/in/oleksiy-nikolaenko/'
					className='social-link'
					target='_blank'
					rel='noreferrer'
				>
					<i className='bx bxl-linkedin social-icon'></i>Linkedin
				</a>
			</div>
		</section>
	);
};

export default Social;

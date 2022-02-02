import { FormattedMessage } from 'react-intl';

const Interests = () => {
	return (
		<section className='interests section'>
			<h2 className='section-title'>
				{<FormattedMessage id='hobbies.section-title' />}
			</h2>

			<div className='interests-container'>
				<div className='interests-content'>
					<i className='bx bx-headphone interests-icon'></i>
					<span className='interests-name'>
						{<FormattedMessage id='hobbies.title-1' />}
					</span>
				</div>

				<div className='interests-content'>
					<i className='bx bxs-movie interests-icon'></i>
					<span className='interests-name'>
						{<FormattedMessage id='hobbies.title-2' />}
					</span>
				</div>

				<div className='interests-content'>
					<i className='bx bx-book-open interests-icon'></i>
					<span className='interests-name'>
						{<FormattedMessage id='hobbies.title-3' />}
					</span>
				</div>

				<div className='interests-content'>
					<i className='bx bx-dumbbell interests-icon'></i>
					<span className='interests-name'>
						{<FormattedMessage id='hobbies.title-4' />}
					</span>
				</div>
			</div>
		</section>
	);
};

export default Interests;

import { FormattedMessage } from 'react-intl';

const Experience = () => {
	return (
		<section className='experience section'>
			<h2 className='section-title'>
				{<FormattedMessage id='experience.section-title' />}
			</h2>

			<div className='experience-container'>
				<div className='experience-content'>
					<div className='experience-time'>
						<span className='experience-rounder'></span>
						<span className='experience-line'></span>
					</div>

					<div className='experience-data'>
						<h3 className='experience-title'>Frontend developer</h3>
						<span className='experience-company'>My projects</span>
						<p className='experience-description'>
							{<FormattedMessage id='experience.description-title-1' />}
							<br />
							{<FormattedMessage id='experience.description-subtitle-1' />}
							<br />
							<b>
								<a
									href='https://github.com/DimaxizISD-21/Flix-go-typescript'
									target='_blank'
									rel='noreferrer'
								>
									{<FormattedMessage id='experience.link-msg' />}
								</a>
							</b>
						</p>
					</div>
				</div>

				<div className='experience-content'>
					<div className='experience-time'>
						<span className='experience-rounder'></span>
						<span className='experience-line'></span>
					</div>

					<div className='experience-data'>
						<h3 className='experience-title'>Frontend developer</h3>
						<span className='experience-company'>My projects</span>
						<p className='experience-description'>
							{<FormattedMessage id='experience.description-title-2' />}
							<br />
							{<FormattedMessage id='experience.description-subtitle-2' />}
							<br />
							<b>
								<a
									href='https://github.com/DimaxizISD-21/react-tic-tac-toe'
									target='_blank'
									rel='noreferrer'
								>
									{<FormattedMessage id='experience.link-msg' />}
								</a>
							</b>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

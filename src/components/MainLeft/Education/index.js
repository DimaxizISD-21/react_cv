import { FormattedMessage } from 'react-intl';

const Education = () => {
	return (
		<section className='education section' id='education'>
			<h2 className='section-title'>
				{<FormattedMessage id='education.section-title' />}
			</h2>
			<div className='education-container'>
				<div className='education-content'>
					<div className='education-time'>
						<span className='education-rounder'></span>
						<span className='education-line'></span>
					</div>

					<div className='education-data'>
						<h3 className='education-title'>
							{<FormattedMessage id='education.education-1' />}
						</h3>
						<span className='education-studies'>
							{<FormattedMessage id='education.studies-1' />}
						</span>
						<span className='education-year'>
							{<FormattedMessage id='education.studies-year-1' />}
						</span>
					</div>
				</div>

				<div className='education-content'>
					<div className='education-time'>
						<span className='education-rounder'></span>
						<span className='education-line'></span>
					</div>

					<div className='education-data'>
						<h3 className='education-title'>
							{<FormattedMessage id='education.education-2' />}
						</h3>
						<span className='education-studies'>
							{<FormattedMessage id='education.studies-2' />}
						</span>
						<span className='education-year'>
							{<FormattedMessage id='education.studies-year-2' />}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;

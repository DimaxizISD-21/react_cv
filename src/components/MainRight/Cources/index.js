import { FormattedMessage } from 'react-intl';

const Cources = () => {
	return (
		<section className='courses section' id='courses'>
			<h2 className='section-title'>
				{<FormattedMessage id='courses.section-title' />}
			</h2>

			<div className='courses-container'>
				<div className='courses-content'>
					<h3 className='courses-title'>
						{<FormattedMessage id='courses.title-1' />}
					</h3>

					<p className='courses-description'>
						<b>
							<a
								href='https://www.udemy.com/course/javascript_full/'
								target='_blank'
								rel='noreferrer'
							>
								{<FormattedMessage id='courses.link-msg' />}
							</a>
						</b>
					</p>
				</div>

				<div className='courses-content'>
					<h3 className='courses-title'>
						{<FormattedMessage id='courses.title-2' />}
					</h3>

					<p className='courses-description'>
						<b>
							<a
								href='https://www.udemy.com/course/webdeveloper/'
								target='_blank'
								rel='noreferrer'
							>
								{<FormattedMessage id='courses.link-msg' />}
							</a>
						</b>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Cources;

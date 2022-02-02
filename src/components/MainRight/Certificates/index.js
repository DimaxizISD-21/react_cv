import { FormattedMessage } from 'react-intl';

const Certificates = () => {
	return (
		<section className='certificates section'>
			<h2 className='section-title'>
				{<FormattedMessage id='certificates.section-title' />}
			</h2>

			<div className='certificates-container'>
				<div className='certificates-content'>
					<h3 className='certificates-title'>
						{<FormattedMessage id='certificates.title-1' />}
					</h3>
					<p className='certificates-description'>
						<b>
							<a
								href='https://osvita.diia.gov.ua/digigram-share/EnQlcvS2ZEBiyti7oA9QS-ucFGVfXuYY'
								target='_blank'
								rel='noreferrer'
							>
								{<FormattedMessage id='certificates.link-msg' />}
							</a>
						</b>
					</p>
				</div>

				<div className='certificates-content'>
					<h3 className='certificates-title'>
						{<FormattedMessage id='certificates.title-2' />}
					</h3>
					<p className='certificates-description'>
						<b>
							<a
								href='https://drive.google.com/file/d/1gasqWTl6rTV4wTjoPGo-nYmf9KIbA2M5/view?usp=sharing'
								target='_blank'
								rel='noreferrer'
							>
								{<FormattedMessage id='certificates.link-msg' />}
							</a>
						</b>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Certificates;

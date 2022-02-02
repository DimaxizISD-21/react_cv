import { FormattedMessage } from 'react-intl';

const Languages = () => {
	return (
		<section className='languages section'>
			<h2 className='section-title'>
				{<FormattedMessage id='languages.section-title' />}
			</h2>

			<div className='languages-container'>
				<ul className='languages-content'>
					<li className='languages-name'>
						<span className='languages-circle'></span>
						{<FormattedMessage id='languages.title-1' />}{' '}
						{<FormattedMessage id='languages.title-level-1' />}
					</li>
					<li className='languages-name'>
						<span className='languages-circle'></span>
						{<FormattedMessage id='languages.title-2' />}{' '}
						{<FormattedMessage id='languages.title-level-2' />}
					</li>
					<li className='languages-name'>
						<span className='languages-circle'></span>
						{<FormattedMessage id='languages.title-3' />}{' '}
						{<FormattedMessage id='languages.title-level-3' />}
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Languages;

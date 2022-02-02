import { useCallback } from 'react';
import { useLocale } from '../../hooks/useLocale';
import { useOutSide } from '../../hooks/useOutSide';

const LanguageDropDown = ({ languages, currentLanguage, selectLanguage }) => {
	return (
		<div className='dropdown'>
			{languages.map((item) => {
				const style =
					currentLanguage === item.name
						? 'dropdown-item active'
						: 'dropdown-item';
				return (
					<span
						key={item.name}
						name={item.name}
						onClick={selectLanguage}
						className={style}
					>
						{item.name}
					</span>
				);
			})}
		</div>
	);
};

const LanguageToggle = () => {
	const { ref, isShow, setIsShow } = useOutSide(false);
	const { locales, currentlocale, onSetLocale } = useLocale();

	const handleChangeLocale = useCallback(
		(e) => {
			onSetLocale(e.target.getAttribute('name'));
			setIsShow(!isShow);
		},
		[onSetLocale, setIsShow, isShow]
	);

	return (
		<>
			<div
				ref={ref}
				className='toggle-language'
				title='Change language'
				onClick={() => setIsShow(!isShow)}
			>
				<div className='toggle-language-current'>{currentlocale}</div>
				<div className='toggle-language-arrow'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			</div>
			{isShow ? (
				<LanguageDropDown
					languages={locales}
					currentLanguage={currentlocale}
					selectLanguage={handleChangeLocale}
				/>
			) : null}
		</>
	);
};

export default LanguageToggle;

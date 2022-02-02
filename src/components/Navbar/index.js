import { useState } from 'react';
import { useOutSide } from '../../hooks/useOutSide';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

const NavItem = ({
	tag,
	name,
	icon,
	listStyle,
	onToggleNavBar,
	setCurrentItemActive,
}) => {
	return (
		<li className='header-nav-item'>
			<Link
				activeClass='header-nav-link active'
				to={tag}
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
				onClick={onToggleNavBar}
				onSetActive={setCurrentItemActive}
			>
				<span className={listStyle}>
					<i className={`header-nav-icon ${icon}`}></i>
					{name}
				</span>
			</Link>
		</li>
	);
};

const NavList = ({ btnList, onToggleNavBar }) => {
	const [currentItemActive, setCurrentItemActive] = useState('home');

	return (
		<ul className='header-nav-list'>
			{btnList.map((item) => (
				<NavItem
					key={item.tag}
					{...item}
					listStyle={
						currentItemActive === item.tag
							? 'header-nav-link active'
							: 'header-nav-link'
					}
					onToggleNavBar={() => onToggleNavBar()}
					setCurrentItemActive={() => setCurrentItemActive(item.tag)}
				/>
			))}
		</ul>
	);
};

const Navbar = () => {
	const { ref, isShow, setIsShow } = useOutSide();

	const btnList = [
		{
			name: <FormattedMessage id='navbar.btn-1' />,
			tag: 'home',
			icon: 'bx bxs-home',
		},
		{
			name: <FormattedMessage id='navbar.btn-2' />,
			tag: 'profile',
			icon: 'bx bxs-user',
		},
		{
			name: <FormattedMessage id='navbar.btn-3' />,
			tag: 'education',
			icon: 'bx bxs-book',
		},
		{
			name: <FormattedMessage id='navbar.btn-4' />,
			tag: 'skills',
			icon: 'bx bxs-receipt',
		},
		{
			name: <FormattedMessage id='navbar.btn-5' />,
			tag: 'experience',
			icon: 'bx bxs-briefcase',
		},
		{
			name: <FormattedMessage id='navbar.btn-6' />,
			tag: 'certificates',
			icon: 'bx bxs-award',
		},
		{
			name: <FormattedMessage id='navbar.btn-7' />,
			tag: 'courses',
			icon: 'bx bxs-award',
		},
	];

	return (
		<header className='header'>
			<nav className='header-nav'>
				<a href='#logo' className='header-nav-logo'>
					{<FormattedMessage id='navbar.logo' />}
				</a>
				<div className={isShow ? 'header-nav-menu active' : 'header-nav-menu'}>
					<NavList btnList={btnList} onToggleNavBar={setIsShow} />
				</div>
				<div
					ref={ref}
					className='header-nav-toggle'
					onClick={() => setIsShow(!isShow)}
				>
					<i className='header-nav-toggle-icon bx bxs-grid-alt'></i>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

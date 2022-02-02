const MainWrapper = ({ children }) => {
	return (
		<main className='main-container'>
			<div className='main-wrapper'>{children}</div>
		</main>
	);
};

export default MainWrapper;

import { createContext, useState } from 'react';
import { LOCALES } from '../i18';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [state, setState] = useState({
		locale: LOCALES.UKRANIAN,
	});

	const value = { state, setState };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

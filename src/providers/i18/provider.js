import { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';
import { AppContext } from '../context';

import { messages } from './messages';
import { LOCALES } from './constants';

export const IntlAppProvider = ({ children }) => {
	const { state } = useContext(AppContext);

	return (
		<IntlProvider
			messages={flatten(messages[state.locale])}
			locale={state.locale}
			defaultLocale={LOCALES.UKRANIAN}
		>
			{children}
		</IntlProvider>
	);
};

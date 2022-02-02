import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './providers/context';
import { IntlAppProvider } from './providers/i18';

import './index.css';

ReactDOM.render(
	<StrictMode>
		<AppContextProvider>
			<IntlAppProvider>
				<App />
			</IntlAppProvider>
		</AppContextProvider>
	</StrictMode>,
	document.getElementById('root')
);

import React from 'react';
import { hydrate } from 'react-dom';
import Routes from 'routes';

import 'sass/setup';

const render = Component => {
	hydrate(
		<Component />,
		document.getElementById('root')
	);
};

render(Routes);

if (module.hot && process.env.NODE_ENV === 'development') {
	module.hot.accept('routes', () => {
		const Routes = require('routes').default;
		render(Routes);
	});
}


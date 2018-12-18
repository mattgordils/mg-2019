import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from 'containers/App';

const Routes = ({ match }) => (
	<Router>
		<App />
	</Router>
);

export default Routes;
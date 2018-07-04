import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Hello from 'containers/Hello';

const Routes = ({ match }) => (
	<Router>
		<div>
			<Route exact path="/" render={(props) => (<Hello  {...props} />)} />
		</div>
	</Router>
);

export default Routes;
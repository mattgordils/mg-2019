import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import View from 'containers/View';

import './App.scss';

class App extends Component {

	render() {

		const props = {};

		return (
			<div>
				<Route title="Home" exact path="/" render={(props) => (<View  {...props} />)} />
				<Route title="Project" path="/another-page" render={(props) => (<View  {...props} />)} />
				<Route title="Projects" path="/projects/:id" render={(props) => (<View  {...props} />)} />
			</div>
		);
	}
}

export default App;
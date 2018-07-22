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
			</div>
		);
	}
}

export default App;
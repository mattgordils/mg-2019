import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Page from 'containers/Page';
import Projects from 'containers/Projects';
import Project from 'containers/Project';

import './App.scss';

class App extends Component {

	render() {

		const props = {};

		return (
			<div>
				<Route exact path="/" render={(props) => (<Page {...props} />)} />
				<Route exact path="/projects" render={(props) => (<Projects {...props} />)} />
				<Route exact path="/projects/:id" render={(props) => (<Project {...props} />)} />
				<div className="mg-grid">
					<div className="container">
						<div className="grid-flex no-break">
							<div className="col grow"><div className="grid-lines"/></div>
							<div className="col grow"><div className="grid-lines"/></div>
							<div className="col grow"><div className="grid-lines"/></div>
							<div className="col grow hide-sm"><div className="grid-lines"/></div>
							<div className="col grow hide-lg"><div className="grid-lines"/></div>
							<div className="col grow hide-lg"><div className="grid-lines"/></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
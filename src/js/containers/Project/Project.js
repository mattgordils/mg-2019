import React, { Component } from 'react';
import './Project.scss';

import pages, { projects } from 'content';
import { sanitize } from 'util/formatting';

export default class Project extends Component {

	state = {
		project : false
	}

	componentDidMount () {
		this.setProject();
	}

	setProject = () => {
		projects().then((projects) => {
			projects.items.forEach((item) => {
				if(this.props.match.params.id === sanitize(item.fields.title)) {
					this.setState({project : item})
				}
			})
		});
	}

	render() {
		if (!this.state.project) {
			return false
		}

		return (
			<div>
				<div className="container my-margin align-center">
					<h1>{this.state.project.fields.title}</h1>
				</div>
			</div>
		);
	}
}

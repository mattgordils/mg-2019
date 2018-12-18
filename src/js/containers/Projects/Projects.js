import React, { Component } from 'react';
import './Projects.scss';

import { Link } from "react-router-dom";

import pages, { projects } from 'content';
import { sanitize } from 'util/formatting';

export default class Projects extends Component {

	state = {
		projects : false
	}

	componentDidMount () {
		this.getProjects();
	}

	getProjects = () => {
		projects().then((projects) => {
			this.setState({projects : projects.items})
		});
	}

	render() {
		if (!this.state.projects) {
			return false
		}

		return (
			<div>
				<div className="container my-margin align-center">
					<h1>Projects</h1>
				</div>
				<div className="container my-margin align-center">
					<div>
						{this.state.projects.map((project) => {
							console.log(project)
							return (
								<Link to={"/projects/" + sanitize(project.fields.title)}>
									<div>{project.fields.title}</div>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		);
	}
}

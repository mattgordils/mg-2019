import React, { Component } from 'react';
import pages from 'content';
import { sanitize } from 'util/formatting';

export default class View extends Component {

	state = {
		pages : false
	}

	componentDidMount = () => {
		this.getContent();
	}

	getContent = () => {
		pages.then((value) => {
			setTimeout(() => {
				this.setState({pages : value});
			}, 100)
		});
	}

	render() {

		if (!this.state.pages) {
			return 'loading pages...'
		}

		console.log(this.state.pages)
		
		return (
			<div>
				<h1>Hello World</h1>
				{this.state.pages.map((page) => {
					let pageTitle = page.fields.title || page.fields.pageType;
					return (
						<a className="mr-2" href={sanitize(pageTitle)}>{pageTitle}</a>
					)	
				})}
			</div>
		);
	}
}

import React, { Component } from 'react';
import './Page.scss';

import pages, { projects } from 'content';
import { sanitize } from 'util/formatting';
import ContentBlocks from 'components/ContentBlocks';

export default class Page extends Component {

	state = {
		page : false
	}

	componentDidMount () {
		this.setPageContent();
	}

	setPageContent = () => {
		pages().then((pages) => {
			pages.items.forEach((item) => {
				console.log(this.props)
				if(this.props.match.path === '/') {
					this.setState({page : item, homepage : true})
				} else if(this.props.match.path === sanitize(item.fields.title)) {
					this.setState({page : item})
				}
			})
		});
	}

	render() {

		if (!this.state.page) {
			return false
		}

		console.log(this.state.page)

		const page = this.state.page;

		return (
			<div className={this.state.homepage ? 'page-home' : 'page-' + sanitize(page.fields.title)}>
				<div className="container my-margin align-center">
					<h1>{page.fields.title}</h1>
				</div>
				<div>
					{page.fields.blocks ? (
						<ContentBlocks blocks={page.fields.blocks}/>
					) : false}
				</div>
			</div>
		);
	}
}

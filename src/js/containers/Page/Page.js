import React, { Component } from 'react';
import './Page.scss';

import pages, { projects } from 'content';
import { sanitize } from 'util/formatting';
import ContentBlocks from 'components/ContentBlocks';
import PageLoader from 'components/PageLoader';
import Footer from 'components/Footer';

export default class Page extends Component {

	state = {
		page : false,
		loading : true
	}

	componentDidMount () {
		this.setPageContent();
	}

	setPageContent = () => {
		pages().then((pages) => {
			pages.items.forEach((item) => {
				if(this.props.match.path === '/') {
					this.setState({
						page : item,
						homepage : true,
						loading : false
					})
				} else if(this.props.match.path === sanitize(item.fields.title)) {
					this.setState({
						page : item,
						loading : false
					})
				}
			})
		});
	}

	render() {

		if (this.state.loading) {
			return <PageLoader />
		}

		// console.log(this.state.page)
		// console.log(this.props)

		const page = this.state.page;

		return (
			<div className={this.state.homepage ? 'page fade-in page-home' : 'page fade-in page-' + sanitize(page.fields.title)}>
				<div className="container my-vert-space align-center">
					<h1 className="h5">{page.fields.title === 'Home' ? 'Matthew Gordils' : page.fields.title}</h1>
				</div>
				<div>
					{page.fields.blocks ? (
						<ContentBlocks blocks={page.fields.blocks}/>
					) : false}
				</div>
				<Footer />
			</div>
		);
	}
}

import React, { Component } from 'react';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './ContentBlocks.scss';

class ContentBlocks extends Component {

	sanitize = (str) => {
		str = str.replace(/\s+/g, '-').toLowerCase();
		return str
	}

	getSectionId (block) {
		if (block.fields.title) {
			return 'section-' + this.sanitize(block.fields.title);
		} else {
			return 'section-' + block.sys.id;
		}
	}

	render() {
		console.log(this.props.blocks)

		return (
			<div className="blocks">
				{this.props.blocks.map((block, index) => {
					return (
						<section 
							className={block.sys.contentType.sys.id + ' block my-margin'}
							key={block.sys.id}
							id={block.fields.title ? this.sanitize(block.fields.title) : this.getSectionId(block)}
						>
							{block.sys.contentType.sys.id === 'blockText' ? (
								<div className="container">
									<div className="rich-text">
										{block.fields.text ? (
											<div className={block.fields.style ? 'blockText-' + block.fields.style : ''} dangerouslySetInnerHTML={{ __html: documentToHtmlString(block.fields.text) }} />
										) : false}
									</div>
								</div>
							) : false}
						</section>
					)
				})}
			</div>
		);
	}
}

export default ContentBlocks;
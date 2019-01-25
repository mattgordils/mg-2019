import React, { Component } from 'react';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import VideoClips from 'components/VideoClips';

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
		// console.log(this.props.blocks)

		return (
			<div className="blocks">
				{this.props.blocks.map((block, index) => {
					return (
						<section 
							className={block.sys.contentType.sys.id + ' ' + block.fields.style + ' block my-vert-space'}
							key={block.sys.id}
							id={block.fields.title ? this.sanitize(block.fields.title) : this.getSectionId(block)}
						>

							{block.sys.contentType.sys.id === 'blockText' ? (
								<div className="container mtn-2">
									<div className={block.fields.style === 'Right' ? 'grid-flex right' : (block.fields.style === 'Left' ? 'grid-flex left' : 'grid-flex center no-break')}>
										<div className={block.fields.style !== 'Center' ? 'col-6' : 'col' }>
											{block.fields.text ? (
												<div className="rich-text" dangerouslySetInnerHTML={{ __html: documentToHtmlString(block.fields.text) }} />
											) : false}
										</div>
									</div>
								</div>
							) : false}

							{block.sys.contentType.sys.id === 'endlessVideos' ? (
								<section className="my-margin">
									<VideoClips videos={block.fields.media} />
								</section>
							) : false}

						</section>
					)
				})}
			</div>
		);
	}
}

export default ContentBlocks;
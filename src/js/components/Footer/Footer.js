import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {
	// console.log(this.props)
	render() {
		return (
			<footer className="footer pb-3 mt-margin my-vert-spacee">
				<div className="container wide">
					<div className="grid-flex align-center">
						<div className="col no-grow"><p>Queens, New York</p></div>
						<div className="col no-grow"><p><a href="#">Work Archive</a></p></div>
						<div className="col no-grow"><p><a href="#">Instagram</a></p></div>
						<div className="col no-grow"><p><a href="#">Dribbble</a></p></div>
						<div className="col no-grow"><p><a href="#">Contact</a></p></div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
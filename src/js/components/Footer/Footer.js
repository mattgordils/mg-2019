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
						<div className="col no-grow"><p><a href="https://www.instagram.com/mattgordils/" target="_blank">Instagram</a></p></div>
						<div className="col no-grow"><p><a href="https://dribbble.com/mattgordils" target="_blank">Dribbble</a></p></div>
						<div className="col no-grow"><p><a href="mailto:mattgordils@gmail.com?subject=Hello from your website">Contact</a></p></div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
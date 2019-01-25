import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {
	// console.log(this.props)
	render() {
		return (
			<footer className="footer">
				<div className="container wide">
					<div className="grid-flex align-center no-break">
						<div className="col no-grow hide-md"><p className="small-caps my-2">Queens, New York</p></div>
						<div className="col no-grow hide-md"><p className="small-caps"><a className="my-2" href="#">Work Archive</a></p></div>
						<div className="col no-grow"><p className="small-caps"><a className="my-2" href="https://www.instagram.com/mattgordils/" target="_blank">Instagram</a></p></div>
						<div className="col no-grow"><p className="small-caps"><a className="my-2" href="https://dribbble.com/mattgordils" target="_blank">Dribbble</a></p></div>
						<div className="col no-grow"><p className="small-caps"><a className="my-2" href="mailto:mattgordils@gmail.com?subject=Hello from your website">Contact</a></p></div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
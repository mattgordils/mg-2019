
import React from 'react';

const Html = ({Styles, Js, title, children}) => {

	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="canonical" href="" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

				<meta name="description" content=""/>
				<meta property="og:title" content=""/>
				<meta property="og:description" content=""/>
				<meta property="og:image" content=""/>
				<meta property="og:url" content=""/>
				<meta property="og:type" content="website"/>

				<meta name="twitter:title" content="" />
				<meta name="twitter:description" content="" />
				<meta name="twitter:card" content="" />
				<meta name="twitter:image" content="" />
				<meta name="twitter:image:width" content="480" />
				<meta name="twitter:image:height" content="480" />

				<Styles />
				<title>{title}</title>
			</head>
			<body>
				<div id="root">{children}</div>
				<Js />
			</body>
		</html>
	);
};

export default Html;
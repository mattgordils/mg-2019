import React from 'react';
import { renderToString, renderToNodeStream } from "react-dom/server"
import { StaticRouter as Router, matchPath } from 'react-router';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import flushFiles from 'webpack-flush-chunks';

import Html from 'containers/Html';
import App from 'containers/App';
import NoMatch from 'containers/NoMatch';

import pages, { projects } from 'content';

import { sanitize } from 'util/formatting';

// This is weird, I get it but best for now
// Problem is in production when our server builds it overwrites our clients css file
import 'sass/setup';

// const routes = [
// 	{ path : '/', title : 'Home' },
// ];

export default ({ clientStats }) => {

	var routes = [];
	var siteTitle = 'Matthew Gordils';

	pages().then((pages) => {
		pages.items.forEach((page) => {
			var pageTitle = page.fields.title;
			console.log(page)
			routes.push({
				title : pageTitle === 'Home' ? siteTitle : pageTitle + ' → ' + siteTitle,
				path : pageTitle === 'Home' ? '/' : '/' + sanitize(pageTitle)
			})
		})
	});

	projects().then((projects) => {
		projects.items.forEach((project) => {
			var projectTitle = project.fields.title;
			console.log(project)
			routes.push({
				title : projectTitle + ' → Projects → ' + siteTitle,
				path : '/projects/' + sanitize(projectTitle)
			})
		})
		// Route for projects listing page
		routes.push({
			title : 'Projects → ' + siteTitle,
			path : '/projects'
		})
	});
	
	return (req, res, next) => {

		const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
		const route = routes.find((route) => req.url === route.path);

		if (!match || !route) {
			res.status(404).send(renderToString(<NoMatch />));
			return;
		}

		const chunkNames = flushChunkNames();
		const { Js, Styles } = flushFiles(clientStats, { chunkNames });

		res.write("<!DOCTYPE html>");
		const stream = renderToNodeStream(
			<Html title={route.title} Js={Js} Styles={Styles}>
				<Router context={{}} location={req.url}>
					<App />
				</Router>
			</Html>
		);
		stream.pipe(res);
	}
}

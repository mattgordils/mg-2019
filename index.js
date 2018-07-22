const webpack = require('webpack');
const express = require('express');
const join = require('path').join

const app = express();

const configureDevelopment = app => {
	const clientConfig = require('./webpack/client.dev');
	const serverConfig = require('./webpack/server.dev');
	const publicPath = clientConfig.output.publicPath;
	const outputPath = clientConfig.output.path;

	const compiler = require('webpack')([clientConfig, serverConfig]);
	const clientCompiler = compiler.compilers[0];

	app.use(require('webpack-dev-middleware')(compiler, {publicPath}));
	app.use(require('webpack-hot-middleware')(clientCompiler));
	app.use(publicPath, express.static(outputPath));
	app.use(require('webpack-hot-server-middleware')(compiler, {
			serverRendererOptions: { outputPath },
	}));
};

const configureProduction = app => {
  const clientStats = require('./build/stats.json');
	const serverRender = require('./build/server.js').default;
	const publicPath = '/';
	const outputPath = join(__dirname, 'build');

	app.use(publicPath, express.static(outputPath));
	app.use(serverRender({
		serverRendererOptions: { outputPath },
		clientStats
	}));
};


 if ( process.env.NODE_ENV === 'development') {
	configureDevelopment(app);
 } else {
 	configureProduction(app);
 }

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}...`));

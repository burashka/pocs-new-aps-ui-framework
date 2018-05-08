const webpack				= require('webpack');
const webpackDevMiddleware	= require('webpack-dev-middleware');
const config				= require('./webpack.config');
const app					= new (require('express'))();
const port					= 3000;
const compiler				= webpack(config);

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'));
app.get(
	"/aps/2/resources/78ffbc39-ce89-a2d9-ca96-a3cbf6c1a71b/loginHistory",
	(req, res) => res.sendFile(__dirname + '/data/loginHistory.json')
);
app.listen(port, error => {
	if (error)	{
		console.error(error);
	} else {
		console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
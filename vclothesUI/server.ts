// import * as express from 'express';
// import * as webpack from 'webpack';
// import config from './webpack.config';
// import * as webpackDevMiddleware from 'webpack-dev-middleware';
// import * as path from 'path';

// const app = express();
// const port = 3000;
// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath:  config.output.publicPath,
// }));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(port, (error: any) => {
//   /* tslint-disable no-console */
//   if (error) {
//     console.error(error);
//   } else {
//     console.info(
//       '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
//       port,
//       port
//     );
//   }
//   /* tslint-enable no-console */
// });

/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config');

var app = express();
var compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/static', express.static(path.join(__dirname, './semantic/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3001');
});

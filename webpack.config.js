/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style-loader/useable!css-loader!postcss-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.txt$/,
        loader: 'raw-loader',
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
    }]
  }
};

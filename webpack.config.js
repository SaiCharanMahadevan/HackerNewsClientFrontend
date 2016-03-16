var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [ 'style', 'css', 'sass']
      },
      {
        test: /\.(png|jpg|jpeg|bmp|ico|gif|svg)$/,
        loader: 'file?name=images/[md5:hash].[ext]'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'json-loader'
      }
    ]
  }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
  // Resolve Redux to source
  module.exports.resolve = {
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains:['json-loader'],
    alias: {
      'redux': reduxSrc ,
      'json-loader': 'json-loader/index.js'
    }
  }
  module.exports.resolveLoader = {
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains:['json-loader'],
    alias: {
      'redux': reduxSrc ,
      'json-loader': 'json-loader/index.js'
    }
  }

  // Compile Redux from source
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: [ 'babel', 'json-loader' ],
    include: reduxSrc
  })
}

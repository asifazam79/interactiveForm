var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    'redux-form': 'ReduxForm',
    'redux-form-website-template': 'ReduxFormWebsiteTemplate'
  },
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.css']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.md/,
        loaders: ['html-loader', 'markdown-loader']
      }
    ]
  }
}

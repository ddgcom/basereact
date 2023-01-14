const path = require( 'path' )
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, './public/index.html' ),
      filename: './index.html',
      favicon: './public/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
				test: /\.(png|jp?g|svg|gif)$/,
				use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
						outputPath: 'images/',
						publicPath: 'images/'
          }
				}]
			}
    ]
  }
}

--------------------------
EXTENSIONS VS CODE:
- prettier
- eslint
- style components
--------------------------
1. npm init -y
2. npm i webpack webpack-cli --save-dev
3. create folder src
//////////////////
mkdir src
//////////////////
4. npm i html-webpack-plugin --save-dev
5. "webpack.config.js"
//////////////////
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
//////////////////
6. edit "package.json"
//////////////////
"scripts": {
  "build": "webpack",
  "dev": "webpack serve",
  "test": "echo \"Error: no test specified\" && exit 1"
},
//////////////////
7. npm i webpack-dev-server --save-dev
8. npm i react react-dom 
9. npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev
10. edit "webpack.config.js"
//////////////////
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
//////////////////
11. npm i standard --save-dev
12. edit "package.json"
//////////////////
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --mode development",
  "lint": "standard",
  "lint-fix": "standard --fix",
  "test": "echo \"Error: no test specified\" && exit 1"
},
"eslintConfig": {
  "extends": ["./node_modules/standard/eslintrc.json"]
}
//////////////////
13. npm install --save styled-components
14. npm install @apollo/client graphql
15. npm install @reach/router or npm install @gatsbyjs/reach-router
16. npm install --save react-helmet
17. npm install --save-dev webpack-pwa-manifest
18. npm install --save-dev workbox-webpack-plugin
19. npm install --save-dev file-loader
20. add to "webpack.config.js"
//////////////////
rules: [
  {
    test: /\.(png|jp?g|svg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],
//////////////////
--------------------------
OPTIONALS:
- npm install --save react-icons
- npm install intersection-observer
- npm install eslint @babel/eslint-parser --save-dev and edit "package.json"
//////////////////
"eslintConfig": {
  "parser": "eslint-parser",
  "extends": ["./node_modules/standard/eslintrc.json"]
}
//////////////////
- npm install --save prop-types
- npm install --save cypress
--------------------------
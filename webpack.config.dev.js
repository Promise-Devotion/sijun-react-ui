const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {

  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sijun - React',
      template: 'example.html'
    })
  ]
})
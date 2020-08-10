const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {

  mode: 'production',
  entry: {
    ...base.entry,
    index: './example.tsx'
  },

  output: {
    path: path.resolve(__dirname, 'doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sijun - React',
      template: 'index.html'
    }),
  ]
})
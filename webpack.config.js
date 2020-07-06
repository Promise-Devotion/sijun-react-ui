const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'Gu',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'sijun - React',
            template: 'index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
}
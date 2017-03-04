var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var helpers = require('./webpack.helpers');

console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = {

    devtool: 'source-map',
    performance: {
        hints: false
    },
    entry: {
        'polyfills': './angularApp/polyfills.ts',
        'vendor': './angularApp/vendor.ts',
        'app': './angularApp/main.ts'
    },

    output: {
        path: __dirname + '/wwwroot/',
        filename: 'dist/[name].bundle.js',
        chunkFilename: 'dist/[id].chunk.js',
        publicPath: '/'
    },
    // watch: true,
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/wwwroot/'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
        // proxy: {
        //     "*": {
        //         target: 'http://localhost:5000',
        //         secure: false,
        //         changeOrigin: true
        //     }
        // }
    },

    module: {
        rules: [{
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader',
                    'source-map-loader',
                    'tslint-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                loader: 'file-loader?name=/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'polyfills'] }),

        new CleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/assets'
            ]
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'angularApp/index.html'
        }),

        new CopyWebpackPlugin([
            { from: './angularApp/images/*.*', to: 'assets/', flatten: true }
        ]),
        // new webpack.HotModuleReplacementPlugin()
        new BrowserSyncPlugin( // https://www.npmjs.com/package/browser-sync-webpack-plugin
            // BrowserSync options 
            {
                // browse to http://localhost:3000/ during development 
                host: 'localhost',
                port: 3001,
                // proxy the Webpack Dev Server endpoint 
                // (which should be serving on http://localhost:3100/) 
                // through BrowserSync 
                proxy: 'http://localhost:3000/'
            },
            // plugin options 
            {
                // prevent BrowserSync from reloading the page and let Webpack Dev Server take care of this 
                // should remove --hot 
                reload: false
            })
    ]

};
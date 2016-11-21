var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server','./src'],
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].bundle.js',
        publicPath: '/static/',
        infoPath: true
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.jsx?$/,loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/,loader: 'style!css!sass', exclude: /node_modules/ }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.jsx', '.js'],
        modulesDirectories: ['node_modules', 'src']
    }
};

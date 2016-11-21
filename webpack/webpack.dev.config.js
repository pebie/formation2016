import webpack from 'webpack';
import path    from 'path';

const host    = 'http://localhost';
const port    = 8080;

const DevConfig = {
  devtool: 'source-map',
  entry: {
    main: [`webpack-dev-server/client?${host}:${port}`, 'webpack/hot/only-dev-server', './src'],
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
    infoPath: true,
  },
  module: {
    loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
        // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.jsx', '.js'],
    modulesDirectories: ['node_modules', 'src'],
  },
};

export default DevConfig;

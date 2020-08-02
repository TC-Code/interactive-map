const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, '../', 'build'),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 5001,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Interaktywna mapa Polski',
      template: 'index.html',
    }),
  ],
};

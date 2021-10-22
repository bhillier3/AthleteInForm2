const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.[fullhash].js'
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './public/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  'useBuiltIns': 'usage',
                  'corejs': { version: '3.18' },
                  'targets': 'defaults'
                }
              ],
              '@babel/preset-react'
            ],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    open: true
  }
};

if (currentTask == 'build') {
  config.mode = 'production';
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' })
  );
};

module.exports = config;
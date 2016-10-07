const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/*
APP rappresenta il root file della mia applicazione. Se non specifico un file di
default si aspetta un file index.jsx
BUIL rappresenta la cartella dove verrà inserito il bundle costruito, ovvero un file
javascript con il codice transpiled
*/
const APP = __dirname + '/app/app.jsx';
const BUILD = __dirname + '/build';
const STYLE = __dirname + '/app/style.css';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: {
    app:APP,
    style: STYLE
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders:[
      // Loader per i file js e jsx per ES6->ES5 e JSX(ML)->JS
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        exclude: /(node_modules|bower_components)/
      },
      // Loader per i file CSS
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      // Loader per i file SASS
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  /*
  Impostazioni minime per webpack-dev-server
  */
  devServer: {
    host: HOST,
    port: PORT
  },
  /*
  Sezione dei plugin. HtmlWebpackPlugin crea per me un index.ejs in cui agganciare la mia APP
  */
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React Speed Coding',
      appMountId: 'app',
      inject: false
    })
  ]
};

Dipendenze:

```bash
npm install --save react react-dom
npm install --save-dev webpack webpack-dev-server html-webpack-plugin html-webpack-template node-sass sass-loader css-loader style-loader babel-core babel-loader babel-preset-es2015 babel-preset-es2015 babel-preset-react
```

Installazione ambiente di TEST:

```bash
npm install --save-dev karma karma-mocha karma-mocha-reporter karma-webpack expect karma-chrome-launcher mocha react-addons-test-utils
```
Mentre se volessi usare babel come loader in karma (che non faccio perchè passo da webpack):

```bash
npm install karma-babel-preprocessor --save-dev
```

The karma-babel-preprocessor has additional configuration sections that I was instructed to add. In my case, I didn’t need it and simply referenced the ['babel'] preprocessor as above.

Inoltre per far lavorare webpack e karma con più entry points ho aggiunto la sezione di webpack cos' come trovato su stackoverflow:
http://stackoverflow.com/questions/36766624/how-to-use-webpack-multiple-entries-with-karma

```yaml
webpack: {
  devtool: webpackConfig.devtool,
  resolve: webpackConfig.resolve,
  module: webpackConfig.module,
  externals: Object.assign({}, webpackConfig.externals, {
    chai: 'chai'
  })
},
```

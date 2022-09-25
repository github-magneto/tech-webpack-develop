const path = require('path')
const pluginOne = require('../plugin/plugin-one')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: path.resolve(__dirname, '../loader/loader-two'),
            options: {
              props: { name: 'loader' }
            }
          },
          {
            loader: path.resolve(__dirname, '../loader/loader-one'),
            options: {
              props: { name: 'loader' }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new pluginOne({ name: 'plugin' })
  ],
}
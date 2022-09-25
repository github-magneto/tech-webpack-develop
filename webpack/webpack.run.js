const webpack = require('webpack')

const webpackConfig = require('./webpack.common')

webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  console.log(stats.toString({ colors: true, modules: true, children: true, chunks: true, chunkModules: true }))
})
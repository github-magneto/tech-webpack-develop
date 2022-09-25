module.exports = function (source, sourceMap, data) {
  // console.log(this.getOptions(), source, sourceMap, data)

  console.log('loader - one')

  return source.replaceAll('px', 'rem')
};
class Plugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    console.log('plugin - one')

    compiler.hooks.beforeCompile.tap('p', (params) => {

      console.log('plugin - compile')
      // console.log(params)

    });

    compiler.hooks.emit.tap('p', (params) => {

      console.log('plugin - emit')
      console.log(params.assets)
      
    });
  }
}

module.exports = Plugin
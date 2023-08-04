const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    entry: './src/pages/login/main.js'
  },
  devServer:{
    open:true
  }
})

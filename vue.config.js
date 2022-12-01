
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    }
  }
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import '@/styles/_variables.scss';`
//       }
//     }
//   }
// }

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
        loaderOptions: {
          sass: {
            data: `@import '@/styles/_variables.scss';`
          }
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

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    proxy: {
      // "/socket.io": {
        
      //   //target: "http://7602941z7e.goho.co:43483/", //API服务器的地址
      //   target:"http://api.mewtopia.cn:5000/",
      //   // target:"http://localhost:5000/",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/socket.io": ''
      //   }
      // }
    }
  },
})




module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints: false
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    css: {
        // loaderOptions: {
        //     postcss: {
        //         plugins: [
        //             require("postcss-pxtorem")({
        //                 rootValue: 37.5, // 换算的基数
        //                 propList: ["*"]
        //             })
        //         ]
        //     }
        // },
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    publicPath: "./",
    runtimeCompiler: true,
    devServer: {
        port: 8071,
        open: true, //配置自动启动浏览器
        proxy: {
            "/api": {
                target: "http://61.185.238.225:25556/", //代理服务server1
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/proxyServer1": ""
                }
            }
        }
    }
}

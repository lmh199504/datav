const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static', //放置生成的静态资源
	devServer: {
		open: true,
		proxy: {
			'/api': {
				// target: 'http://202.109.255.93:8630', //代理地址，这里设置的地址会代替axios中设置的baseURL
				target: 'http://202.109.255.93:8630', //正式
				changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
				//ws: true, // proxy websockets
				//pathRewrite方法重写url
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.plugins.push(new BundleAnalyzerPlugin())
		}
		config.externals = {
			echarts: 'echarts'
		}
	},
	chainWebpack: config => {
	    config
	      .plugin('html')
	      .tap(args => {
	        args[0].title=  '运行监测数据大屏'
	        return args
	      })
	  }
}

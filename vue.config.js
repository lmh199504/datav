const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static', //放置生成的静态资源
	devServer: {
		open: true,
		proxy: {
			'/api1': {
				// target: 'http://10.0.9.51:8090', //代理地址，这里设置的地址会代替axios中设置的baseURL
				target: 'https://xtadmin.xmsme.cn', //正式
				changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
				//ws: true, // proxy websockets
				//pathRewrite方法重写url
				pathRewrite: {
					'^/api1': '/'
					//pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
					//pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
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

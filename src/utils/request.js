import axios from 'axios'
import qs from 'qs'

const service = axios.create({
	baseURL: '/api',
	timeout: 50000,
	// `transformRequest` 允许在向服务器发送前，修改请求数据
	// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
	// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
	transformRequest: [function(data) {
		Object.assign(data, { appId: "appId" })
		// console.log(data)
		return  qs.stringify(data)
	}]
})

service.interceptors.request.use(
	config => {
		// do something before request is sent
		return config
	},
	error => {
		// do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	response => {
		const res = response.data
		const code = res.code
		switch (code) {
			case 200:
				return Promise.resolve(res)
			default:
				return Promise.resolve(res)
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export default service

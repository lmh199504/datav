import axios from 'axios'

const service = axios.create({
	baseURL: '/api',
	timeout: 50000,
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


service.interceptors.request.use(
	config => {
		// do something before request is sent
		// config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
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

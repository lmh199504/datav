import request from '@/utils/request.js'


// 企业基本信息
export const reqGetEntInfo = (data) => {
	Object.assign(data, { action: "ep_data_list" })
	console.log(data)
	return request({
		url: "/zdgy/manage/xtapi",
		data: data,
		method: "POST"
	})
}
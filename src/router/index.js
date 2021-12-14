import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		component: Layout,
		redirect: "/macroscopic",
		children: [
			{
				path: "benefit",
				name: "Benefit",
				component: () => import('@/views/benefit.vue'),
				meta: {
					title: "效益分析"
				}
			},
			{
				path: "history",
				name: "History",
				component: () => import('@/views/history.vue'),
				meta: {
					title: "历史分析"
				}
			},
			{
				path: "macroscopic",
				name: "Macroscopic",
				component: () => import('@/views/macroscopic.vue'),
				meta: {
					title: "宏观分析"
				}
			},
			{
				path: "type",
				name: "Type",
				component: () => import('@/views/type.vue'),
				meta: {
					title: "类型分析"
				}
			}
		]
	},
]

const router = new VueRouter({
	routes
})

export default router

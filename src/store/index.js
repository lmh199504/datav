import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cur_year: new Date().getFullYear() + ''
	},
	mutations: {
		SET_YEAR: (state, year) => {
			state.cur_year = year
		}
	},
	actions: {},
	getters: {
		cur_year: state => state.cur_year	
	},
	modules: {}
})

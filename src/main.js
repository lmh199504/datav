import '@/libs/flexible.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/global.less'

import '@/theme/index.css'
import { DatePicker } from 'element-ui'

Vue.use(DatePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

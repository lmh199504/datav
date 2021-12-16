import '@/libs/flexible.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/global.less'
import '@/utils/element.js'
import '@/theme/index.css'
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

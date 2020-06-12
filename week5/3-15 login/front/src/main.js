import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:3000' : 'http://your.domain.com')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

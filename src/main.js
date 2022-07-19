import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.config.productionTip = false
Vue.use(ElementUI);

//全局配置
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

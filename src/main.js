import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import axios from "axios"
import store from "./vuex/store"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

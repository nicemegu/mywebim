import Vue from 'vue'
import App from './App.vue'
import WebIM from "./utils/WebIM";
import store from "./store/index";
Vue.config.productionTip = false

new Vue({
  WebIM,
  store,
  render: h => h(App),
}).$mount('#app')

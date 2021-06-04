import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)


const routes = [
];

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

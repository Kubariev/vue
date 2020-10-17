import Vue from "vue";
import store from './store/store.js';
import lazyloading from './plugins/lazy.js';
import VueRouter from 'vue-router'
import App from './routes/App.vue'
import '@/styles/global.scss';
import axiosApi from "./../src/axios";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(lazyloading);
Vue.use(VueRouter);
axiosApi.init();

new Vue({
  el: "#app",
  store,
  router,
  delimiters: ["{{", "}}"],
  render(h) {
    return h(App);
  },
});

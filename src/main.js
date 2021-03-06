import Vue from "vue";
import store from './store/store.js';
import lazyloading from './plugins/lazy.js';
import Home from "./Home.vue";
import Movie from "./Movie.vue";
import NotFound from "./NotFound.vue";
import '@/styles/global.scss';
import axiosApi from "./../src/axios";

const homeRoute = "/";
const movieRoutePattern = /^\/movies\/[0-9]+$/;

Vue.config.productionTip = false;
Vue.use(lazyloading);
axiosApi.init();

new Vue({
  el: "#app",
  store,
  delimiters: ["{{", "}}"],
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      if (this.currentRoute === homeRoute) {
        return Home;
      } else if (movieRoutePattern.test(this.currentRoute)) {
        return Movie;
      } else {
        return NotFound;
      }
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

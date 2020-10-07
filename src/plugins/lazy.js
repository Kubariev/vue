import lazyloading from "./../directives/lazyloading";

export default {
  install(Vue) {
    Vue.directive("lazyloading", lazyloading);

    Vue.filter("parseHour", function(value) {
      return Math.floor(value / 60);
    });

    Vue.filter("parseMin", function(value) {
      let hours = Math.floor(value / 60),
          minutes = Math.round(value - (hours * 60));

      return minutes;
    });

    Vue.filter("parseFloor", function(value) {
      return parseFloat(value).toFixed(0);
    });
  },
};

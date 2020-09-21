<template>
  <div id="app">
    <home-header />
    <home-main />
    <home-footer />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeMain from "./components/HomeMain.vue";
import HomeFooter from "./components/Footer.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter,
  },
};
</script>

<style>
body {
  background-color: #555;
  margin: 0;
}
</style>

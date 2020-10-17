<template>
  <div id="home-content">
    <home-header />
    <home-main />
    <home-footer />
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeMain from "../components/HomeMain.vue";
import HomeFooter from "../components/Footer";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter,
  },
  created() {
    this.$store.dispatch("SHOW_FILMS");
  },
};
</script>

<style>
  body {
    background-color: #555;
    margin: 0;
  }
</style>

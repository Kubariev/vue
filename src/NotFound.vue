<template>
  <div id="app">
    <navigation-bar :searchIconPresent="false" />
    <p class="error-404">We're sorry but this page is not available.</p>
    <error-footer />
  </div>
</template>

<script>
import ErrorFooter from "./components/Footer.vue";
import TopBar from "./components/TopBar.vue";
export default {
  name: "NotFound",
  components: { ErrorFooter, TopBar },
};
</script>

<style>
body {
  background-color: #555;
}
.error-404 {
  width: 100%;
  background-color: #232323;
  min-height: 500px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  color: #999;
  margin: 0;
  padding-top: 50px;
}
</style>

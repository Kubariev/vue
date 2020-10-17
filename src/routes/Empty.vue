<template>
  <div id="empty-page">
    <top-bar :searchIconPresent="false" />
    <p class="error-404">We're sorry but this page is not available.</p>
    <empty-footer />
  </div>
</template>

<script>
  import TopBar from "../components/TopBar.vue";
  import EmptyFooter from "../components/Footer.vue";
  export default {
    name: "NotFound",
    components: {TopBar, EmptyFooter},
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

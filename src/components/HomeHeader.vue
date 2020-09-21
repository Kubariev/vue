<template>
  <header class="header">
    <div class="header_wrapper">
      <top-bar :searchIcon="false" />
      <search-bar />
    </div>
  </header>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import TopBar from "./TopBar.vue";

export default {
  name: "HomeHeader",
  components: {
    TopBar,
    SearchBar,
  },
};
</script>

<style>
.header {
  background: url("../assets/bg_header.jpg") center no-repeat;
  background-size: cover;
}

.header_wrapper {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  min-height: 400px;
  padding: 15px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>

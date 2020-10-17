<template>
  <header class="topbar">
    <a href="/" class="header_logo" title="homepage">
      <img src="../assets/logo.png" alt="Netflix roulette">
    </a>
    <div class="header_search" v-if="searchIcon">
      <a class="header_search-link" href="/">
        <img src="../assets/search_icon.png" alt="">
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    searchIcon: Boolean,
  },
};
</script>

<style>
.topbar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.header_search {
  margin-right: 40px;
}
</style>

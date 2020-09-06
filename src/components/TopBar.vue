<template>
  <header class="header">
    <a href="#" class="header_logo" title="homepage">
      <img src="../assets/home_logo.png" alt="">
    </a>
  </header>
</template>

<script>
export default {
  name: 'topBar',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: #232323;
    padding: 15px;
    overflow: hidden;
    max-width: 1360px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .header_logo {
    float: left;
  }
</style>

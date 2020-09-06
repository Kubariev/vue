<template>
  <footer class="footer">
    <a href="/" class="footer_logo" title="homepage">
      <img src="../assets/logo.png" alt="">
    </a>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',

    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  .footer {
    padding: 15px;
    overflow: hidden;
    max-width: 1360px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
  }
  .footer_logo {
    display: inline-block;
    vertical-align: middle;
  }
</style>

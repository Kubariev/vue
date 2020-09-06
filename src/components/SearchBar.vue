<template>
  <div class="search_wrap">
    <h1>Find your movie</h1>
    <form class="search">
      <input type="text" placeholder="Search for movies" class="search_input">
      <input type="submit" class="search_btn" value="SEARCH">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  h1 {
    font: 30px/1.2 "Trebuchet MS", Arial, sans-serif;
    color: #fff;
    margin: 0 0 30px;
    text-transform: uppercase;
  }
  .search_wrap {
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    background: rgba(28, 28, 28, .8);
  }
  .search {
    width: 100%;
    overflow: hidden;
  }
  .search_input {
    float: left;
    width: 80%;
    font: 20px/1.2 "Trebuchet MS", Arial, sans-serif;
    color: #fff;
    margin-right: 2%;
    background: rgba(28, 28, 28, .8);
    padding: 10px;
    border-radius: 3px;
    border: 0;
    box-sizing: border-box;
    outline: none;
  }
  .search_btn {
    float: left;
    font: 20px/1.2 "Trebuchet MS", Arial, sans-serif;
    color: #fff;
    padding: 10px;
    width: 18%;
    background: #f65261;
    border-radius: 3px;
    border: 0;
    box-sizing: border-box;
  }
</style>

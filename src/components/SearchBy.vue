<template>
  <div class="search_by">
    <span class="search_label">Search by</span>
    <ul class="search_list">
      <li class="search_list_item active">
        <a href="#" class="search_list_link">Title</a>
      </li>
      <li class="search_list_item">
        <a href="#" class="search_list_link">Genre</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchBy',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .search_by {
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    background: rgba(28, 28, 28, .8);
    overflow: hidden;
  }
  .search_label {
    float: left;
    color: #fff;
    padding: 5px 0;
    margin-right: 15px;
    font: 16px/1.2 "Trebuchet MS", Arial, sans-serif;
    text-transform: uppercase;
  }
  .search_list {
    float: left;
    width: 20%;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .search_list_item {
    float: left;
    color: #fff;
    background: rgba(28, 28, 28, .6);
    border-radius: 0 3px 3px 0;
  }
  .search_list_item.active {
    background: #f65261;
  }
  .search_list_item:first-child {
    border-radius: 3px 0 0 3px;
  }
  .search_list_link {
    display: block;
    font: 16px/1.2 "Trebuchet MS", Arial, sans-serif;
    color: #fff;
    padding: 5px 15px;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>

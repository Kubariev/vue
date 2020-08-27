<template>
  <div class="sort_by">
    <div class="sort_by_wrap">
      <div class="result_item">7 movie found</div>
      <ul class="sort_list">
        <li class="sort_list_item">
          <a href="#" class="sort_list_link">Release date</a>
        </li>
        <li class="sort_list_item active">
          <a href="#" class="sort_list_link">Rating</a>
        </li>
      </ul>
      <span class="sort_label">Sort by</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortBy',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .sort_by {
    width: 100%;
    padding: 20px;
    background: #555;
    overflow: hidden;
    box-sizing: border-box;
  }
  .sort_by_wrap {
    max-width: 1200px;
    margin: 0 auto;
  }
  .result_item {
    float: left;
    color: #fff;
    padding: 5px 0;
    font: bold 16px/1.2 "Trebuchet MS", Arial, sans-serif;
  }
  .sort_label {
    float: right;
    color: #fff;
    padding: 5px 0;
    margin-right: 15px;
    font: 16px/1.2 "Trebuchet MS", Arial, sans-serif;
    text-transform: uppercase;
  }
  .sort_list {
    float: right;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .sort_list_item {
    float: left;
    color: #fff;
    background: rgba(28, 28, 28, .6);
    border-radius: 0 3px 3px 0;
  }
  .sort_list_item.active {
    background: #f65261;
  }
  .sort_list_item:first-child {
    border-radius: 3px 0 0 3px;
  }
  .sort_list_link {
    display: block;
    font: 16px/1.2 "Trebuchet MS", Arial, sans-serif;
    color: #fff;
    padding: 5px 15px;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>

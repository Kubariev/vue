<template>
  <div class="search_wrap">
    <h1>Find your movie</h1>
    <form class="search">
      <div class="search_actions">
        <my-button msg="Search" @onClick="searchMovies" />
      </div>
      <input
              type="text"
              class="search_input"
              placeholder="Search for movies"
              v-model="query"
              @keyup.enter="searchMovies"
      />
      <switch-bar switchName="Search by" :options="options" />
    </form>
  </div>
</template>

<script>
import MyButton from "./Button.vue";
import SwitchBar from "./SwitchBar.vue";

export default {
  name: "SearchBar",
  components: { MyButton, SwitchBar },

  data: function() {
    return {
      query: "",
      options: [
        { id: "title", text: "Title", selected: true },
        { id: "genre", text: "Genre", selected: false },
      ],
    };
  },

  methods: {
    searchMovies() {
      let searchField,
          selectedOption = this.options.filter((option) => option.selected);
      if (selectedOption.length > 0) searchField = selectedOption[0].id;
      else {
        searchField = "title";
      }
      this.$emit("searchMovies", {
        query: this.query.toLowerCase().trim(),
        searchField,
      });
    },
  },
};
</script>

<style>
  h1 {
    font: 40px/1.2 "Montserrat", sans-serif;
    color: #fff;
    margin: 0 0 30px;
    text-transform: uppercase;
  }
  .search_wrap {
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
  }
  .search {
    width: 100%;
    overflow: hidden;
  }
  .search_actions {
    float: right;
  }
  .search_actions .general-btn {
    width: 100%;
    font-size: 1.2em;
    padding: 13px 40px;
  }
  .search_input {
    float: left;
    width: calc(100% - 220px);
    margin-right: 15px;
    padding: 15px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    line-height: 20px;
    font-family: "Montserrat", sans-serif;
    background: rgba(35, 35, 35, 0.6);
    border: 0;
  }
  .search .general-switch {
    clear: both;
    padding-top: 30px;
  }
  .search_input:focus,
  .general-btn:focus {
    outline: none;
  }
</style>

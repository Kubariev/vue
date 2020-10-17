<template>
  <div class="search_wrap">
    <h1>Find your movie</h1>
    <section class="search">
      <div class="search_actions">
        <search-button msg="Search" @onClick="searchFilms" />
      </div>
      <input
              v-model="query"
              type="text"
              class="search_input"
              v-on:keyup.13="searchFilms"
              placeholder="Search for films"
      />
      <switch-bar switchName="Search by" :options="options" @changeSort="changeSearchOption" />
    </section>
  </div>
</template>

<script>
import SearchButton from "./Button.vue";
import SwitchBar from "./SwitchBar.vue";

export default {
  name: "SearchBar",
  components: { SearchButton, SwitchBar },

  data: function() {
    return {
      options: [
        { id: "title", text: "Title", selected: true },
        { id: "genres", text: "Genre", selected: false },
      ],
    };
  },

  computed: {
    query: {
      get() {
        return this.$store.state.searchText;
      },
      set(query) {
        this.$store.commit("CHANGE_SEARCH_INPUT", query);
      },
    },
  },

  methods: {
    searchFilms() {
      this.$store.dispatch("SHOW_FILMS");
    },
    changeSearchOption(searchOption) {
      this.$store.commit("CHANGE_SEARCH_OPTION", searchOption);
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

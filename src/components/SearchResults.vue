<template>
  <div class="search_results">
    <div class="search_results_wrap">
      <span class="search_results-title">
        {{ searchResults }}
      </span>
      <switch-bar switchName="Sort by" :options="options" @changeSort="changeSorting" />
    </div>
  </div>
</template>

<script>
import SwitchBar from "./SwitchBar.vue";

export default {
  name: "SearchResult",
  components: { SwitchBar },
  props: {
    moviesLength: Number,
  },

  data: function() {
    return {
      options: [
        { text: "Release Date", id: "releaseDate", selected: true },
        { text: "Rating", id: "rating", selected: false },
      ],
    };
  },

  computed: {
    searchResults() {
      let length = this.moviesLength;
      if (length === 0) return "";
      return `${length} movie${length > 1 ? "s" : ""} found`;
    },
  },

  methods: {
    changeSorting(sortOption) {
      this.$store.commit("CHANGE_SORT_OPTION", sortOption);
    },
  },
};
</script>

<style>
.search_results {
  background: #555;
  padding: 0 10px;
  min-height: 60px;
  line-height: 60px;
}
.search_results_wrap {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.search_results-title {
  font-weight: 800;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  vertical-align: middle;
}
</style>

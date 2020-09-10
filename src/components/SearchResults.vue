<template>
  <div class="search_results">
    <div class="search_results_wrap">
      <span class="search_results-title">
        {{ resultsString }}
      </span>
      <switch-bar switchName="Sort by" :options="options" />
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
        { id: "releaseDate", text: "Release Date", selected: true },
        { id: "rating", text: "Rating", selected: false },
      ],
    };
  },

  computed: {
    resultsString() {
      let length = this.moviesLength;
      if (length === 0) return "";
      return `${length} movie${length > 1 ? "s" : ""} found`;
    },
    sorting() {
      let selected = this.options.filter((option) => option.selected);
      if (selected.length > 0) return selected[0].id;
      return "releaseDate";
    },
  },

  watch: {
    sorting: function(newSortingOption) {
      this.$emit("sortingChanged", newSortingOption);
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

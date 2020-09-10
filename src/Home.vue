<template>
  <div id="app">
    <home-header @searchMovies="searchMovies" />
    <home-main :movies="movies" />
    <home-footer />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeMain from "./components/HomeMain.vue";
import HomeFooter from "./components/Footer.vue";
import moviesJson from "./assets/movies.json";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter,
  },
  data: function() {
    return {
      movies: moviesJson,
    };
  },
  methods: {
    validateMovie(movieField, query) {
      if (typeof movieField === "string") {
        movieField = movieField.toLowerCase();
      } else {
        query = query.charAt(0).toUpperCase() + query.slice(1);
      }
      return movieField.includes(query);
    },

    searchMovies(searchRequest) {
      let self = this;
      if (searchRequest.query === "") {
        self.movies = moviesJson;
      } else {
        self.movies = self.$_.filter(moviesJson, function(movie) {
          return self.validateMovie(
            movie[searchRequest.searchField],
            searchRequest.query
          );
        });
      }
    },
  },
};
</script>

<style>
body {
  background-color: #555;
  margin: 0;
}
</style>

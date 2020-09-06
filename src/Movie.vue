<template>
  <div id="app">
    <movie-header :movie="movie" />
    <movie-results :movies="moviesWithGenres" :movie="movie" />
    <movie-footer />
  </div>
</template>

<script>
import MovieHeader from "./components/MovieHeader.vue";
import MovieResults from "./components/MovieResults.vue";
import MovieFooter from "./components/Footer.vue";
import moviesJson from "./assets/movies.json";

export default {
  name: "Movie",
  components: {
    MovieHeader,
    MovieResults,
    MovieFooter,
  },
  computed: {
    moviesWithGenres() {
      let self = this;
      return self.$_.filter(moviesJson, function(movie) {
        if (self.movie.id === movie.id) return false;
        return self.$_.intersection(self.movie.genre, movie.genre).length > 0;
      });
    },

    movie() {
      let path = window.location.pathname,
          movieId = path.split("/")[2];
      return this.$_.find(moviesJson, function(movie) {
        return movie.id === movieId;
      });
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

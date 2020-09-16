<template>
  <main class="movie_results">
    <genre-list :genres="movie.genre" />
    <div v-if="movies.length" class="movies_list">
      <movie-item v-for="movie in movies" :key="movie.title" :movie="movie" />
    </div>
    <div v-else class="movies_empty">
      No films found
    </div>
  </main>
</template>

<script>
import GenreList from "./GenreList.vue";
import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieResults",
  components: { GenreList, MovieItem },
  computed: {
    movie() {
      return this.$store.getters.getMovieById;
    },
    movies() {
      return this.$store.getters.getMoviesByGenres(this.movie);
    },
  }
};
</script>

<style>
.movie_results {
  width: 100%;
  height: 100%;
  background-color: #232323;
}
.movies_list {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  padding: 30px 0;
}
.movies_empty {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 300%;
  min-height: 500px;
  line-height: 500px;
}
</style>

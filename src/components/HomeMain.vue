<template>
  <main class="movies_wrapper">
    <search-results :moviesLength="movies.length"/>
    <div class="movies_list" v-if="movies.length">
      <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <div v-else class="results_empty">
      Empty results
    </div>
  </main>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import SearchResults from "./SearchResults.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeMain",
  components: { SearchResults, MovieItem },
  computed: {
    ...mapGetters({
      movies: "getAllFilms",
    }),
  },
};
</script>

<style>
.movies_wrapper {
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

.results_empty {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 300%;
  min-height: 500px;
  line-height: 500px;
}
</style>

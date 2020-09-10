<template>
  <div id="app">
    <movie-header />
    <movie-results />
    <movie-footer />
  </div>
</template>

<script>
import MovieHeader from "./components/MovieHeader.vue";
import MovieResults from "./components/MovieResults.vue";
import MovieFooter from "./components/Footer.vue";

export default {
  name: "Movie",
  components: {
    MovieHeader,
    MovieResults,
    MovieFooter,
  },
};
</script>

<style>
body {
  background-color: #555;
  margin: 0;
}
</style>

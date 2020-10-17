<template>
  <div id="films">
    <movie-header />
    <movie-results />
    <movie-footer />
  </div>
</template>

<script>
  import MovieHeader from "../components/MovieHeader.vue";
  import MovieResults from "../components/MovieResults.vue";
  import MovieFooter from "../components/Footer.vue";

export default {
  name: "Movie",
  components: {
    MovieHeader,
    MovieResults,
    MovieFooter,
  },
  async created() {
    await this.$store.dispatch("FILM_BY_ID", this.$route.params.id);
    await this.$store.dispatch("FILM_BY_GENRES");
  },
};
</script>

<style>
  body {
    background-color: #555;
    margin: 0;
  }
</style>
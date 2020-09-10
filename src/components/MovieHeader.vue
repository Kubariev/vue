<template>
  <header class="movie_header">
    <div class="movie_header_blur">
      <top-bar :searchIcon="true" />
      <movie-details />
    </div>
  </header>
</template>

<script>
import TopBar from "./TopBar.vue";
import MovieDetails from "./MovieDetails.vue";

export default {
  name: "HomeHeader",
  components: {
    TopBar,
    MovieDetails,
  },
};
</script>

<style>
.movie_header {
  background-image: url("../assets/posters_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.movie_header_blur {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(6px);
  padding-left: 50px;
  min-height: 400px;
}
</style>

<template>
  <div class="results-line">
    <span class="results-title"> Films by {{ genreList }} </span>
  </div>
</template>

<script>
export default {
  name: "GenreList",
  props: {
    genres: Array,
  },
  computed: {
    genreList() {
      let genres = this.$props.genres,
          list = genres.join(" or ");
      return `${list} genre${genres.length > 1 ? "s" : ""}`;
    },
  },
};
</script>

<style>
.results-line {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #555;
  padding: 15px 50px;
}

.results-title {
  color: #fff;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}
</style>

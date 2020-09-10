<template>
  <div class="movie_item">
    <a class="movie_item_img-link" :href="movieUrl">
      <img class="movie_item_img" :src="getImgUrl(movie.poster)" />
    </a>
    <div class="movie_item_details">
      <div class="movie_item_title">
        {{ movie.title }}
      </div>
      <div class="movie_item_year">
        {{ movie.releaseDate }}
      </div>
      <div class="movie_item_genre">
        {{ genreList }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: { type: Object, required: true },
  },
  computed: {
    genreList() {
      let movie = this.$props.movie;
      return movie.genre.join(" & ");
    },
    movieUrl() {
      return `/movies/${this.$props.movie.id}`;
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/posters/" + pic);
    },
  },
};
</script>

<style>
.movie_item {
  width: 300px;
  margin: 40px 40px 0;
  display: flex;
  flex-flow: column wrap;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}

.movie_item_img {
  width: 100%;
  height: 450px;
}

.movie_item_details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  opacity: 0.8;
}

.movie_item_title {
  width: 70%;
}

.movie_item_year {
  padding: 3px 10px;
  border: 1px solid #666;
  border-radius: 5px;
}

.movie_item_genre {
  margin: 8px 0;
  opacity: 0.7;
}
</style>

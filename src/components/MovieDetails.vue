<template>
  <div class="movie_details">
    <img class="movie_details_img" :src="getImgUrl(movie.poster)" />
    <div class="movie_details_wrap">
      <div class="movie_details_title">
        {{ movie.title }}
        <div class="movie_details_rating">
          {{ getRating(movie.rating) }}
        </div>
      </div>
      <div class="movie_details_genre">
        {{ genreList }}
      </div>
      <div class="movie_details_release-wrap">
        <span class="movie_details_release">
          {{ movie.releaseDate }} <span>year</span>
        </span>
        <span class="movie_details_duration"> {{ movie.duration }} <span>min</span></span>
      </div>
      <div class="movie_details_desc">
        {{ movie.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieDetails",
  props: {
    movie: Object,
  },
  computed: {
    ...mapGetters({
      movie: "getFilmsById",
    }),

    genreList() {
      let movie = this.movie;
      if (!movie) return "";

      return movie.genre.join(" & ");
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/posters/" + pic);
    },

    getRating(val) {
      return parseFloat(val).toFixed(1);
    },
  },
};
</script>

<style>
.movie_details {
  display: flex;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 60px;
}

.movie_details_img {
  width: 250px;
  max-height: 400px;
}

.movie_details_wrap {
  margin: 30px 40px;
}

.movie_details_title {
  font-size: 46px;
  line-height: 62px;
  margin-bottom: 10px;
}

.movie_details_rating {
  display: inline-block;
  vertical-align: top;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 22px;
  color: #a1e66f;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}

.movie_details_release-wrap {
  font-size: 24px;
  color: #f65261;
  padding: 30px 0;
}

.movie_details_release {
  margin-right: 40px;
}

.movie_details_release span,
.movie_details_duration span {
  font-size: 14px;
  color: #999;
}

.movie_details_desc {
  color: #999;
}
</style>

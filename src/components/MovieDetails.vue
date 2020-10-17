<template>
  <div class="movie_details" v-if="movie">
    <img class="movie_details_img" :src="movie.poster_path" />

    <div class="movie_details_wrap">
      <div class="movie_details_title" v-if="movie.title">
        {{ movie.title }}
      </div>

      <div class="movie_details_genre">
        {{ genreList }}
      </div>

      <div class="movie_details_release-wrap">
        <span class="movie_details_release" v-if="movie.release_date">
          {{ movie.release_date | parseFloor }} <span>year</span>
        </span>
        <span class="movie_details_duration" v-if="movie.runtime">
          {{ movie.runtime  | parseHour }} <span>hour</span> {{ movie.runtime  | parseMin }} <span>min</span>
        </span>
      </div>

      <div class="movie_details_desc" v-if="movie.overview">
        {{ movie.overview  }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieDetails",
  computed: {
    ...mapGetters({
      movie: "getFilmsById",
    }),

    genreList() {
      let movie = this.movie;
      if (!movie) return "";

      return movie.genres.join(" & ");
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

import MovieDetails from "./../components/MovieDetails.vue";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

const Template = (args, { opts }) => ({
  props: Object.keys(opts),
  components: { MovieDetails },
  template:
    '<div style="background-color: #2222; height:100%"><movie-details v-bind="$props" /></div>',
});

export const DefaultMovieDetails = Template.bind({});
DefaultMovieDetails.args = {
  movie: {
    id: 447365,
    title: "Guardians of the Galaxy Vol. 3",
    release_date: "2020-05-01",
    genres: ["Adventure", "Science Fiction", "Action"],
    poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    vote_average: 6,
    vote_count: 9,
    runtime: "116",
    overview: "The third film based on Marvel's Guardians of the Galaxy."
  },
};
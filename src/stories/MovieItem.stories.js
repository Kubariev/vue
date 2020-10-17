import MovieItem from "./../components/MovieItem.vue";

export default {
  title: "MovieItem",
  component: MovieItem,
};

const Template = (args, { opts }) => ({
  props: Object.keys(opts),
  components: { MovieItem },
  template:
    '<div style="background-color: #232323; height:100%"><movie-item v-bind="$props" /></div>',
});

export const DefaultMovieItem = Template.bind({});
DefaultMovieItem.args = {
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

import GenreList from "./../components/GenreList.vue";

export default {
  title: "GenreList",
  component: GenreList,
  argTypes: {
    genres: Array,
  },
};

const Template = (args, { arg }) => ({
  props: Object.keys(arg),
  components: { GenreList },
  template: '<genre-list v-bind="$props" />',
});

export const GenreListGenre = Template.bind({});
GenreListGenre.args = {
  genres: [ "Drama" ]
};

export const GenreListGenres = Template.bind({});
GenreListGenres.args = {
  genres: [ "Adventure", "Drama" ]
};

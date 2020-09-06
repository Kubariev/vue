import SearchResults from "./../components/SearchResults.vue";

export default {
  title: "SearchResults",
  component: SearchResults,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchResults },
  template: '<search-results v-bind="$props" />',
});

export const SearchWithResults = Template.bind({});
SearchWithResults.args = {
  movies: [
    { id: 1, title: "Action" },
    { id: 2, title: "Drama" },
  ],
};

export const SearchEmpty = Template.bind({});
SearchEmpty.args = {
  movies: [],
};

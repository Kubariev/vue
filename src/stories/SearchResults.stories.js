import SearchResults from "./../components/SearchResults.vue";

export default {
  title: "SearchResults",
  component: SearchResults,
};

const Template = (args, { opts }) => ({
  props: Object.keys(opts),
  components: { SearchResults },
  template: '<search-results v-bind="$props" />',
});

export const SearchWithResults = Template.bind({});
SearchWithResults.args = {
  movies: [
    { id: 1, title: "Adventure" },
    { id: 2, title: "Science Fiction" },
  ],
};

export const SearchEmpty = Template.bind({});
SearchEmpty.args = {
  movies: [],
};

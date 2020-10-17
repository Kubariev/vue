import TopBar from "./../components/TopBar.vue";

export default {
  title: "TopBar",
  component: TopBar,
  opts: {
    searchIcon: Boolean,
  },
};

const Template = (args, { opts }) => ({
  props: Object.keys(opts),
  components: { TopBar },
  template:
    '<top-bar v-bind="$props" />',
});

export const TopBarDefault = Template.bind({});
TopBarDefault.args = {
  searchIcon: false
};

export const TopBarIcon = Template.bind({});
TopBarIcon.args = {
  searchIcon: true
};

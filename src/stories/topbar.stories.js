import TopBar from "./../components/TopBar.vue";

export default {
  title: "TopBar",
  component: TopBar,
  argTypes: {
    searchIcon: Boolean,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationBar },
  template:
    '<navigation-bar v-bind="$props" />',
});

export const TopBarWithIcon = Template.bind({});
TopBarWithIcon.args = {
  searchIcon: true
};

export const TopBarWithoutIcon = Template.bind({});
TopBarWithoutIcon.args = {
  searchIcon: false
};

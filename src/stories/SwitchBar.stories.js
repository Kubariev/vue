import SwitchBar from "./../components/SwitchBar.vue";

export default {
  title: "SwitchBar",
  component: SwitchBar,
};

const Template = (args, { opts }) => ({
  props: Object.keys(opts),
  components: { SwitchBar },
  template:
    '<div style="background-color: black; min-height: 300px"><switch-bar v-bind="$props" /></div>',
});

export const DefaultSwitchBar = Template.bind({});
DefaultSwitchBar.args = {
  options: [{ text: "Title" }, { text: "Genre" }],
  switchName: "Search by",
};
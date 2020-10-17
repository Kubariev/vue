import Button from "./../components/Button.vue";

export default {
  title: "Button",
  component: Button,
  opts: {
    msg: String,
  },
};

const Template = (args, { opts }) => ({
  props: Object.keys(opts),
  components: { Button },
  template: '<my-button v-bind="$props" @onClick="onClick" />',
});

export const Default = Template.bind({});
Default.args = {
  msg: "Default",
};

export const New = Template.bind({});
New.args = {
  msg: "New Button",
};

import { action } from '@storybook/addon-actions'

import TopBar from '../components/TopBar.vue'

export default {
  component: [TopBar],
  title: 'TopBar'
}

export const Header = () => ({
  components: { TopBar },
  template: '<TopBar></TopBar>',
  methods: { action: action('clicked') }
})
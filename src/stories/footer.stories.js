import { action } from '@storybook/addon-actions'

import Footer from '../components/Footer.vue'

export default {
  component: [Footer],
  title: 'Footer'
}

export const FooterBlock = () => ({
  components: { Footer },
  template: '<Footer></Footer>',
  methods: { action: action('clicked') }
})
import { action } from '@storybook/addon-actions'

import SortBy from '../components/SortBy.vue'

export default {
  component: [SortBy],
  title: 'SortBy'
}

export const SortFilter = () => ({
  components: { SortBy },
  template: '<SortBy></SortBy>',
  methods: { action: action('clicked') }
})
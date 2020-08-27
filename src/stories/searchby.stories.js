import { action } from '@storybook/addon-actions'

import SearchBy from '../components/SearchBy.vue'

export default {
  component: [SearchBy],
  title: 'SearchBy'
}

export const SearchFilter = () => ({
  components: { SearchBy },
  template: '<SearchBy></SearchBy>',
  methods: { action: action('clicked') }
})
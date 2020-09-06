import { action } from '@storybook/addon-actions'

import SearchBar from '../components/SearchBar.vue'

export default {
  component: [SearchBar],
  title: 'SearchBar'
}

export const SearchForm = () => ({
  components: { SearchBar },
  template: '<SearchBar></SearchBar>',
  methods: { action: action('clicked') }
})
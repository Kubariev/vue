import {shallowMount} from '@vue/test-utils'
import Button from '../../src/components/Button.vue'
const msg = 'My button';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('render button', () => {
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders text', () => {
    expect(wrapper.text()).toMatch(msg)
  });
})

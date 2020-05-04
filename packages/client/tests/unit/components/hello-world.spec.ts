import { shallowMount } from '@vue/test-utils';
import { HelloWorld } from '@/components';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const message = 'From Common: Hello World!';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { message },
    });
    expect(wrapper.text()).toMatch(message);
  });
});

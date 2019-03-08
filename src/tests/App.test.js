import React from 'react';
import App from '../App';
import Enzyme, {shallow, mount} from 'enzyme';
import HomeContainer from '../containers/Home/HomeContainer';
import Root from '../Root';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <App/>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render HomeContainer', () => {
    expect(wrapper.find('HomeContainer').length).toEqual(1);
  });
});
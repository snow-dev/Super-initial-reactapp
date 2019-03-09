/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import HomeContainer from '../components/Home/HomeContainer';
import Root from '../Root';
import App from '../App';

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

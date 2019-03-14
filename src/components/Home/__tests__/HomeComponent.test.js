/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import Root from '../../../Root';
import HomeComponent from '../HomeComponent';

describe('${0}', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HomeComponent/>
      </Root>
    );
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a div', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });
});
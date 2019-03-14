/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import {HomeContainer} from '../HomeContainer';
import Root from '../../../Root';

describe('${0}', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HomeContainer/>
      </Root>
    );
  });

  /**
   * After each test, we unmount component.
   */
  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a ', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });
});


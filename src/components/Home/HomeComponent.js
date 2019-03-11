/** Created: 2019-03-08 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/

/** Import helpers section **/
import PropTypes from 'prop-types';

/** Import resources section **/

/** Import UI components **/


class HomeComponent extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <h2>{this.props.translate('home.hello')}</h2>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HomeComponent.propTypes = {};

export default withLocalize(HomeComponent);
/** Created: 2019-03-08 **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

/**  Redux section import **/
import {withLocalize} from 'react-localize-redux';
import {connect} from 'react-redux';

/** Language imports **/


/** Import component section **/

/** Import helpers section **/



export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <h2>home-container </h2>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HomeContainer.propTypes = {};

/**
 * Map some parameters from store to be injected to component.
 * @param store
 * @returns {{}}
 */
function mapStateToProps(store) {
  return {};
}

/**
 * Map some actions to be injected as props.
 * @param dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withLocalize(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
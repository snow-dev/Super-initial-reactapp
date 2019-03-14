import {combineReducers} from 'redux';
import {localizeReducer} from 'react-localize-redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

// -> Own reducers.

export default combineReducers({
  localize    : localizeReducer,
  toastr      : toastrReducer,
});
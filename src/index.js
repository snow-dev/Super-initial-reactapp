/** Import react section **/
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/** Redux section import **/
import { composeWithDevTools } from 'redux-devtools-extension';
import { LocalizeProvider} from "react-localize-redux";
import { applyMiddleware , createStore} from 'redux';
import   thunkMiddleware  from "redux-thunk";
import { Provider } from  'react-redux'

/** Import component section **/
import App from './App';

/** Import helpers section **/
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/rootReducer';
import ReduxToastr from 'react-redux-toastr';


/** Import react section **/

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ));

ReactDOM.render(
  <LocalizeProvider store={store}>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
      <ReduxToastr transitionIn="fadeIn"
                   transitionOut="fadeOut"
                   progressBar={true}
      />
    </Provider>
  </LocalizeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

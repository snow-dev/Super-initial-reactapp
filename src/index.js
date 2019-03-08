/** Import react section **/
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/** Redux section import **/
import { LocalizeProvider} from "react-localize-redux";

/** Import component section **/
import App from './App';

/** Import helpers section **/
import * as serviceWorker from './serviceWorker';
import ReduxToastr from 'react-redux-toastr';
import Root from './Root';


/** Import react section **/

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={App}/>
    </Router>
    <ReduxToastr transitionIn="fadeIn"
                 transitionOut="fadeOut"
                 progressBar={true}
    />
  </Root>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

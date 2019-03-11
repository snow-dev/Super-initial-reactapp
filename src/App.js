/** Import react section **/
import {withLocalize} from 'react-localize-redux';
import {withRouter} from 'react-router-dom';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

/** Import component section **/
import HomeContainer from './components/Home/HomeContainer';

/** Import helpers section **/

/** Import resources section **/
import globalTranslations from './resources/translations/translations'
import './resources/styles/App.css';


class App extends Component {
  constructor(props){
    super(props);
    autoBind(this);

    this.props.initialize({
      languages: [
        {name: 'English', code: 'en'},
        {name: 'Español', code: 'es'}
      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup: false,
        defaultLanguage: 'es'
      }
    });
  };

  componentDidCatch(error, errorInfo) {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeContainer/>
        </header>
      </div>
    );
  }
}

export default withLocalize(withRouter(App));

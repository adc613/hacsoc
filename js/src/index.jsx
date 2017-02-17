import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './createStore';
import Router from './navigation/index';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

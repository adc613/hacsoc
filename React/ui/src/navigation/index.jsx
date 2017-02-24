import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router';

import HomePage from '../pages/HomePage';
import Four0Four from '../pages/Four0Four';


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="*" component={Four0Four} />
      </Router>
    );

  }
}


export default Routes;

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TodoList from '../components/smart/TodoList';
import TodoFormContainer from '../components/smart/TodoFormContainer';
import CallToAction from '../components/dumb/CallToAction';
import Banner from '../components/dumb/Banner';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div id="home-page">
        <Banner />
        <div id="content">
          <div className="left">
            <CallToAction />
            <TodoFormContainer />
          </div>
          <div className="right">
            <TodoList />
          </div>
        </div>
      </div>
    );

  }
}


export default HomePage;

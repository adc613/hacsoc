import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TodoList from '../components/smart/TodoList';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div>
        <TodoList />
      </div>
    );

  }
}


export default HomePage;

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <h1>Home Page</h1>
    );

  }
}


export default HomePage;

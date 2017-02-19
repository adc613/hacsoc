import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div id="banner">
        <h1> To-CWRU List </h1>
      </div>
    );

  }
}


export default Banner;

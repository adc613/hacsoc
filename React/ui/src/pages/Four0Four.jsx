import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Four0Four extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <h1>Not Found</h1>
    );

  }
}


export default Four0Four;

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div id="call-to-action"> 
        <p>Because who doesn't need another todo app</p>
      </div>
    );

  }
}


export default CallToAction;

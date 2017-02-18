import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <li>
        <div className="todo">
          <h3 className="date"> {this.props.date} </h3>
          <p className="description"> {this.props.description} </p>
          <div className="buttons">
            <button className="done" onClick={this.props.doneClickHandler}>
              Mark as Done
            </button>
            <button className="archive" onClick={this.props.archiveClickHandler}>
              Archive
            </button>
          </div>
        </div>
      </li>
    );

  }
}


export default Todo;

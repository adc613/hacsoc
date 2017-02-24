import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <form id="todo-form" onSubmit={this.props.submitHandler}>
        <h2>Add To-CWRU</h2>
        <div id="description-container">
          <textarea
            id="description"
            placeholder="Description"
            value={this.props.description}
            onChange={this.props.inputChangeHandler}
          />
        </div>
        <div id="due-date">
          <label htmlFor="date"> Due Date </label>
          <input
            type="date"
            id="date"
            value={this.props.date}
            onChange={this.props.inputChangeHandler}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    );

  }
}


export default TodoForm;

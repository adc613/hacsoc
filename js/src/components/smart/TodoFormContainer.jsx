import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/todoList';
import TodoForm from '../dumb/TodoForm';


class TodoFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.actions.addTodo();
  }

  inputChangeHandler(event) {
    event.preventDefault();
    let input = event.target.id;
    let value = event.target.value;
    this.props.actions.inputChange(input, value);
  }

  render() {

    return (
      <TodoForm
        submitHandler={this.submitHandler}
        inputChangeHandler={this.inputChangeHandler}
        description={this.props.description}
        date={this.props.date}
      />
    );

  }
}


function mapStateToProps(state) {
  return {
    description: state.todoList.getIn(['form', 'description']),
    day: state.todoList.getIn(['form', 'date']),
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);

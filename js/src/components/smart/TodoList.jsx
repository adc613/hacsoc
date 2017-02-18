import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/todoList';
import Todo from '../dumb/Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  doneClickHandler(event) {
  }

  archiveClickHandler(event) {
  }

  render() {

    return (
      <ul id="todo-list">
        {
          this.props.todos.map((todo) => {
            return (
              <Todo 
                key={todo.get('id')}
                description={todo.get('description')}
                date={todo.get('date')}
                doneClickHandler={this.doneClickHandler}
                archiveClickHandler={this.archiveClickHandler}
              />
            );
          })
        }
      </ul>
    );

  }

}

function mapStateToProps(state) {
  return {
    todos: state.todoList.get('todos'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

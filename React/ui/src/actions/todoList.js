export const INPUT_CHANGE = "INPUT_CHANGE";
export const ADD_TODO = "ADD_TODO";
export const MARK_AS_DONE = "MARK_AS_DONE";
export const ARCHIVE = "ARCHIVE";


export function inputChangeAction(input, value) {

  return {
    type: INPUT_CHANGE,
    payload:{
      input,
      value
    }
  };

}

export function inputChange(input, value) {

  return (dispatch, getState) => {

    dispatch(inputChangeAction(input, value));

  };

}

export function addTodoAction(description, dueDate, id) {

  return {
    type: ADD_TODO,
    payload:{
      description,
      dueDate,
      id
    }
  };

}

export function addTodo() {

  return (dispatch, getState) => {

    let state = getState();
    let description = state.todoList.getIn(['form', 'description']);

    let date = state.todoList.getIn(['form', 'date']);
    date = date.split('-');
    let day = date[1];
    let month = date[2];
    let year = date[0];

    let dueDate = day + '/' + month + '/' + year;
    let id = state.todoList.get('todos').size;
    id += state.todoList.get('archive').size;
    id += state.todoList.get('done').size;
    id += 1;
    console.log(dueDate);

    dispatch(addTodoAction(description, dueDate, id));

    dispatch(inputChangeAction('description', ''));
    dispatch(inputChangeAction('day', ''));
    dispatch(inputChangeAction('month', ''));
    dispatch(inputChangeAction('year', ''));

  };

}

export function markAsDoneAction(id) {

  return {
    type: MARK_AS_DONE,
    payload:{
      id
    }
  };

}

export function markAsDone(id) {

  return (dispatch, getState) => {

    dispatch(markAsDoneAction(id));

  };

}

export function archiveAction(id) {

  return {
    type: ARCHIVE,
    payload:{
      id
    }
  };

}

export function archive(id) {

  return (dispatch, getState) => {

    dispatch(archiveAction(id));

  };

}

import { fromJS } from 'immutable';

const initialState = fromJS({
  todos: [
    {
      id: 1,
      description: "hello",
      date: '06/13/17'
    },
    {
      id: 2,
      description: "hello",
      date: '06/13/17'
    },
    {
      id: 3,
      description: "hello",
      date: '06/13/17'
    },
  ]
});

export default function reducer(state=initialState, action) {

  switch(action.type) {
    default:
      return state;
  }

}

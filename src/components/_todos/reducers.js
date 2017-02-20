import t from './actionTypes'

const initialState = [{
  text: 'new todo',
  completed: false,
  id: 1
}]

function add (state, {text}) {
  return [
    ...state,
    { text,
      completed: false,
      id: Math.random().toString() }
  ]
}

// @TODO: extract all individual reducers to their own functions.
export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return [
        add(state, action.payload)
      ]
    default:
      return state
  }
}

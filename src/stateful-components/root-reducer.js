import { combineReducers } from 'redux'
import todos from './todos'

// @TODO: Replace with external namespace provider
export default combineReducers({
  [todos.constants.name]: todos.reducer
})

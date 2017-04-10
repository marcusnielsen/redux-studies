// @flow
import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getAll} from '../selectors'
import TodoItem from './todo'

// @TODO: compose flow types from todoProps type.

const TodoList = ({todos}) => (
  <div>
    {todos.map(todo => <TodoItem todo={todo} />)}
  </div>
)

export default connect(
  createStructuredSelector({
    todos: getAll
  })
)(TodoList)

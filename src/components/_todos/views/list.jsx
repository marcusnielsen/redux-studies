import React from 'react'
import { connect } from 'redux'
import { createStructuredSelector } from 'reselect'
import { getAll } from '../selectors'
import ListItem from './list-item'

const view = ({ todos }) => (
  <div>
    {
      todos.map(todo =>
        <ListItem todo={todo} />
      )
    }
  </div>
)

// @TODO: Try Tom's solution if applicable
view.propTypes = {
  todos: React.PropTypes.arrayOf(
    React.PropTypes.object
  )
}

export default connect(
  // @TODO: refactor to selectors or motivate where to draw the line.
  createStructuredSelector({
    todos: getAll
  })
)(view)

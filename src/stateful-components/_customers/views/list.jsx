// @flow
import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Details from './details'

// @TODO: compose flow types from todoProps type.

const view = ({items}) => (
  <div>
    {items.map(item => <Details item={item} />)}
  </div>
)

export default connect(
  // TODO: only use createSelector or remove comment.
  createStructuredSelector({
    items: getAll
  })
)(view)

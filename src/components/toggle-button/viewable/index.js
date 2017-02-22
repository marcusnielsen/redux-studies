import React from 'react'
import PropTypes from './prop-types'
import View from './view'

export default function create ({model}) {
  const propTypes = PropTypes({reactPropTypes: React.PropTypes})
  const view = View({propTypes, React, update: model.actions.update})
  const viewModelProps = {
    propTypes,
    view
  }
  const viewModel = Object.assign({}, model, viewModelProps)
  return viewModel
}

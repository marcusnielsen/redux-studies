import React from 'react'
import ViewConfigs from './view-configs'

function render () {
  
}

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    const viewConfigs = ViewConfigs()
    this.state = viewConfigs[props.page]
  }

  render () {
    render (this.state)
  }
}

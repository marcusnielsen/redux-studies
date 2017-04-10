import React from 'react'

const initialState = {
  selectedId: null
}
// @TODO: Document pattern
function createSelectIdReducer(selectedId) {
  return function selectIdReducer(prevState) {
    return Object.assign({}, prevState, {selectedId})
  }
}

export default class component extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = initialState

    this.actions = {
      selectId: this.selectId.bind(this)
    }
  }

  selectId(id) {
    this.setState(createSelectIdReducer(id))
  }

  render() {
    return this.props.children({
      actions: this.actions,
      state: this.state
    })
  }
}

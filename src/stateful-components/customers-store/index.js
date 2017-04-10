import React from 'react'
import {v4 as uuidV4} from 'uuid'
import {merge as objectMerge} from 'ramda'

function generateCustomerMock() {
  const id = uuidV4()
  return {
    [id]: {
      id,
      name: 'Marcus Nielsen',
    }
  }
}

const initialState = {
  byId: generateCustomerMock()
}

function reloadReducer(prevState) {
  const byId = objectMerge(
    prevState.byId,
    generateCustomerMock()
  )
  return objectMerge(
    prevState,
    {byId}
  )
}

export default class component extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = initialState

    this.actions = {
      reload: this.reload.bind(this)
    }
  }

  reload() {
    setTimeout(() => {
      this.setState(reloadReducer)
    }, 1000)
  }

  render() {
    return this.props.children({
      actions: this.actions,
      state: this.state
    })
  }
}

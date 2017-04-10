import React from 'react'

export default class component extends React.Component {
  render () {
    const reload = this.props.reload
    const customers = this.props.customers
    const selectedId = this.props.selectedId

    return (
      <div style={{backgroundColor: 'steelblue', color: 'white'}}>
        <button onClick={reload}>Reload</button>
        {
          <div>
            <div>id: {
              selectedId && customers.byId[selectedId].id
            }</div>
            <div>name: {
              // @TODO: selectedId
              selectedId && customers.byId[selectedId].name
            }</div>
          </div>
        }
      </div>
    )
  }
}

import React from 'react'

export default class component extends React.Component {
  render () {
    const reload = this.props.reload
    const customers = this.props.customers
    // @TODO: Implement
    const selectedId = this.props.selectedId
    const selectId = this.props.selectId

    return (
      <div>
        <button onClick={reload}>Reload</button>
        {Object.keys(customers.byId).map((key) => (
          <div key={key} onClick={() => {selectId(key)}}>
            <div>id: {
              customers.byId[key].id
            }</div>
            <div>name: {
              customers.byId[key].name
            }</div>
          </div>
        ))}
      </div>
    )
  }
}

/*import React from 'react'
import CustomersStore from '../customers-store'

export default class component extends React.Component {
  render () {
    const reload = this.props.actions.reload
    return <CustomersStore>{
      ({state, actions}) => {
        return (
          <div>
            <button onClick={actions.reload}>Reload</button>
            {Object.keys(state.byId).map((key) => (
              <div key={key}>
                <div>id: {
                  state.byId[key].id
                }</div>
                <div>name: {
                  state.byId[key].name
                }</div>
              </div>
            ))}
          </div>
        )
      }
    }</CustomersStore>
  }
}*/

import React from 'react'

export default class component extends React.Component {
  render () {
    const reload = this.props.reload
    const customers = this.props.customers
    const selectedId = this.props.selectedId
    const selectId = this.props.selectId

    return (
      <div>
        <h3>Customers</h3>
        <button onClick={reload}>Reload</button>
        {Object.keys(customers.byId).map((key) => (
          <div style={selectedId === key ? {backgroundColor: 'goldenrod', color: 'white'} : {}} key={key} onClick={() => {selectId(key)}}>
            <div>id: {
              customers.byId[key].id
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

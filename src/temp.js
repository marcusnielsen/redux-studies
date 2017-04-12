const initialState = {
  byId: {}
}

function createAddReducer(eventData) {
  return function addReducer(prevState) {
    const byId = Object.assign(
      {},
      prevState.byId,
      eventData
    )
    return Object.assign(
      {},
      prevState,
      {byId}
    )
  }
}

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = initialState
  }

  add(eventData) {
    this.setState(createAddReducer(eventData))
  }
}

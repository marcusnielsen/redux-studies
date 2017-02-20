export function update (state, {active}) {
  return Object.assign({}, state, {active})
}

export default function create ({initialState}) {
  function rootReducer (state, action) {
    state = state || initialState
    // @TODO: Put in parent instead
    // const reduceMatched = (
    //   entity === action.entity &&
    //   id === action.id &&
    //   field === action.field
    // )

    // if (!reduceMatched) {
    //   return state
    // }

    switch (action.type) {
      case 'update':
        return update(state, action.payload)
      default:
        return state
    }
  }

  return rootReducer
}

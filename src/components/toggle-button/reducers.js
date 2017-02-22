export function update (state, {active}) {
  return Object.assign({}, state, {active})
}

export default function create ({initialState}) {
  function rootReducer (state, action) {
    if (typeof state === 'undefined') {
      return initialState
    }

    switch (action.type) {
      case 'update':
        return update(state, action.payload)
      default:
        return state
    }
  }

  return rootReducer
}

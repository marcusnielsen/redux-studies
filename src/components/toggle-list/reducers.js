// @TODO: We need to call all childReducers

export default function create ({initialState, childReducers}) {
  function rootReducer (state, action) {
    state = state || initialState

    return Object.keys(childReducers).reduce(function onReduce (accumulator, key) {
      accumulator[key] = childReducers[key]((state[key], action))
      return accumulator
    }, {})
  }

  return rootReducer
}

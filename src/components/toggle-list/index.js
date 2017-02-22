import Reducers from './reducers'

export default function create ({initialState}) {
  // @TODO
  const children = {}
  const childReducers = Object.keys(children)
  .reduce(function onReduce (accumulator, key) {
    accumulator[key] = children[key].rootReducer
    return accumulator
  }, {})
  const rootReducer = Reducers({initialState, childReducers})

  return {
    children,
    rootReducer
  }
}

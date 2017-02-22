import Reducers from './reducers'

test('reducers', function onTest () {
  const initialState = {
    id123: {
      active: true
    }
  }
  const reducers = Reducers({initialState})
})

import RootReducer, {update} from './reducers'

test('update', function onTest () {
  const state = {active: false}
  const eventData = {active: true}
  expect(update(state, eventData)).toEqual({active: true})
})

test('rootReducer', function onTest () {
  const initialState = null
  const rootReducer = RootReducer({initialState})

  expect(Object.keys(rootReducer)).toMatchSnapshot()
})

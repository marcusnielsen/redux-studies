import {createStore} from 'redux'
import ToggleButton from '../toggle-button'

test('initial state', function onTest () {
  const provider = {
    dispatch: null
  }
  const initialState = {
    active: true
  }

  const toggleButton = ToggleButton({
    provider,
    entity: 'entity',
    id: 'id1',
    field: 'aField',
    initialState
  })

  const store = createStore(toggleButton.rootReducer)
  expect(store.getState()).toEqual(initialState)
})

test('actions.update', function onTest () {
  let reduxDispatch = null

  function dispatch (data) {
    reduxDispatch(data)
  }

  const provider = {
    dispatch
  }
  const initialState = {
    active: true
  }

  const toggleButton = ToggleButton({
    provider,
    entity: 'entity',
    id: 'id1',
    field: 'aField',
    initialState
  })

  const store = createStore(toggleButton.rootReducer)
  reduxDispatch = store.dispatch
  toggleButton.actions.update(false)
  const expected = {active: false}
  expect(store.getState()).toEqual(expected)
})

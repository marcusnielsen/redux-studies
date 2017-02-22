import actionTypes from '../action-types'
import Actions from './actions'

test('actions initial state', function onTest () {
  const actions = Actions({
    dispatch: () => {},
    actionsTypes: 'a',
    entity: 'b',
    id: 'c',
    field: 'd'
  })

  expect(Object.keys(actions)).toMatchSnapshot()
})

test('actions.update', function onTest (done) {
  function dispatch (data) {
    expect(data).toMatchSnapshot()
    done()
  }

  const actions = Actions({
    dispatch,
    actionTypes,
    entity: 'b',
    id: 'c',
    field: 'd'
  })

  actions.update(true)
})

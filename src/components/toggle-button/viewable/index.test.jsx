import React from 'react'
import {createStore} from 'redux'
import {mount} from 'enzyme'
import ToggleButton from '../../toggle-button'
import Viewable from '../viewable'

test('viewable', function onTest () {
  const initialState = {
    active: false
  }

  const provider = {
    dispatch: null
  }

  const model = ToggleButton({
    entity: 'a',
    id: 'b',
    field: 'c',
    initialState,
    provider
  })

  const viewable = Viewable({model})
  expect(Object.keys(viewable)).toMatchSnapshot()
})


test('viewable.view update interaction', function onTest () {
  let dispatchProxy = null

  function dispatch (data) {
    dispatchProxy(data)
  }

  const initialState = {
    active: false
  }

  const provider = {
    dispatch
  }

  const model = ToggleButton({
    entity: 'a',
    id: 'b',
    field: 'c',
    initialState,
    provider
  })

  const store = createStore(model.rootReducer)
  dispatchProxy = store.dispatch

  const viewable = Viewable({model})
  const ReactView = viewable.view
  const wrapper = mount(<ReactView active={false} />)
  // @TODO: continue here.
  expect(wrapper.simulate('click').html()).toMatchSnapshot()
})

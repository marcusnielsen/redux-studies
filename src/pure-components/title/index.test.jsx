import React from 'react'
import Title from '../title'
import {shallow} from 'enzyme'

test('title', () => {
  const wrapper = shallow(<Title>my title</Title>)
  expect(wrapper.text()).toEqual('my title')
})

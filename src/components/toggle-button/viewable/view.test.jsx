import {shallow} from 'enzyme'
import React from 'react'
import PropTypes from './prop-types'
import View from './view'

test('view', function onTest () {
  const propTypes = PropTypes({reactPropTypes: React.PropTypes})
  const ReactView = View({React, propTypes})
  const wrapper = shallow(<ReactView active={false} />)
  expect(wrapper.html()).toMatchSnapshot()
})

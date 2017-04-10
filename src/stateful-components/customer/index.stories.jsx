import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Customer from './index'
import CustomersStore from '../customers-store'

storiesOf('customer', module)
  .add('default', () => (
    <CustomersStore>
      {({state, actions}) => (
        <Customer customers={state} reload={actions.reload}/>
      )}
    </CustomersStore>
  ))

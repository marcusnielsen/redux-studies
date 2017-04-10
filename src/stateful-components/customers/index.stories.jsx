import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Customers from './index'
import CustomersStore from '../customers-store'

storiesOf('customers', module)
  .add('default', () => (
    <CustomersStore>
      {({state, actions}) => (
        <Customers  customers={state} reload={actions.reload}/>
      )}
    </CustomersStore>
  ))

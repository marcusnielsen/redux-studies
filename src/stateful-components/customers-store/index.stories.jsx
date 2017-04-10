import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Customer from '../customer'
import Customers from '../customers'
import CustomersStore from '../customers-store'
import Select from '../select'

storiesOf('customers-store', module)
  .add('test case', () => (
    <CustomersStore>
      {({state: customers, actions: {reload}}) => (
        <Select>
          {({state: {selectedId}, actions: {selectId}}) => {
            return (
              <div>
                <Customer customers={customers} selectedId={selectedId} reload={reload}/>
                <Customers customers={customers} selectId={selectId} selectedId={selectedId} reload={reload}/>
              </div>
            )
          }}
        </Select>
      )}
    </CustomersStore>
  ))

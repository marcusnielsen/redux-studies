import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Select from './index'

const mockData = [1,2,3,4,5,6,7,78]

storiesOf('select', module)
  .add('default', () => (
    <Select>
      {({state, actions}) => {
        const {selectedId} = state
        const {selectId} = actions
        return (
          <div>
            <div>
              selected ID: {selectedId}
            </div>
            <div>
              ids: {
                mockData.map((id) => {
                  return (
                    id === selectedId
                    ? <h3 key={id}>{id}</h3>
                    : <div key={id} onClick={() => {selectId(id)}}>{id}</div>
                  )
                })
              }
            </div>
          </div>
        )
      }}
    </Select>
  ))

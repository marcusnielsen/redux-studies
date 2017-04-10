import {v4 as uuidV4} from 'uuid'
import types from './action-types'

const initialState = [
  {
    id: uuidV4(),
    name: 'Marcus Nielsen',
    active: true
  }
]

export function reduce (state = initialState, action) {
  switch (action.type) {
    case types.add:
      return [...state, action.payload]

    default:
      return state
  }
}

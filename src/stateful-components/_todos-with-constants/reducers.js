import {v4 as uuidV4} from 'uuid'
import types from './action-types'

const initialState = [
  {
    text: 'Use Redux!',
    completed: false,
    id: uuidV4()
  }
]

export function reduce (state = initialState, action) {
  switch (action.type) {
    case types.add:
      const items = [...state.items, action.payload]
      return Object.assign({}, state, {items})

    default:
      return state
  }
}

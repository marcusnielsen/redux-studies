import * as types from './action-types'

export const add = (text) => ({
  type: types.add,
  payload: {text}
})

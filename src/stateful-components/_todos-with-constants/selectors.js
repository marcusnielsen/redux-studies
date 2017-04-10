import {createSelector} from 'reselect'
import {name} from './constants'
import _ from 'lodash/fp'

export function getAll (state) {
  return state[name]
}

export function getCompleted () {
  return _.pipe(getAll, filterCompleted)
}

export function getActive () {
  return _.pipe(getAll, filterActive)
}

export const filterCompleted = todos => todos.filter(t => t.completed)
export const filterActive = todos => todos.filter(t => !t.completed)

export function getCounts () {
  return createSelector(
    getAll,
    getCompleted,
    getActive,
    (all, completed, active) => ({
      all: all.length,
      completed: completed.length,
      active: active.length
    })
  )
}

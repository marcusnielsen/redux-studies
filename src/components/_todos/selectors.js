import { createSelector } from 'reselect'
import { pipe } from 'lodash/fp'
// @TODO: module factory should inject this.
import { NAME } from './constants'
import { filterActive, filterCompleted } from './model'

export const getAll = state => state[NAME]

export const getCompleted = pipe(getAll, filterCompleted)

export const getActive = pipe(getAll, filterActive)

export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
)

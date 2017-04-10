import {createSelector} from 'reselect'
import _ from 'ramda'

export default function create({selectState}) {
  const filterActive = items => items.filter(t => t.active)
  const filterPaused = items => items.filter(t => !t.active)

  function getPaused () {
    return _.pipe(selectState, filterPaused)
  }

  function getActive () {
    return _.pipe(selectState, filterActive)
  }

  function getCounts() {
    return createSelector(
      selectState,
      getPaused,
      getActive,
      (all, paused, active) => ({
        all: all.length,
        paused: paused.length,
        active: active.length
      })
    )
  }

  return {
    getActive,
    getPaused,
    getCounts,
  }
}

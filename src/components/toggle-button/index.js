import actionTypes from '../action-types'
import Actions from './actions'
import Reducers from './reducers'

export default function create ({provider, entity, id, field, initialState}) {
  const { dispatch } = provider

  const actions = Actions({
    dispatch,
    actionTypes,
    entity,
    id,
    field
  })

  const rootReducer = Reducers({initialState})

  return {
    dispatch,
    actionTypes,
    actions,
    rootReducer,
    entity,
    id,
    field,
    initialState
  }
}

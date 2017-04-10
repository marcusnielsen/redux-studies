import * as actions from './actions'
import * as views from './views'
import reducer from './reducer'
import Selectors from './selectors'

export default function create({selectState}) {
  const selectors = Selectors({selectState})
  
  return {
    actions,
    reducer,
    selectors,
    views,
  }
}

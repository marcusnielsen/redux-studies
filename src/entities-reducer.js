import schema from './schema'

const initialState = schema.getDefaultState()

export default function entitiesReducer (state = initialState, action) {
  switch (action.type) {
    case 'PILOT_CREATE':
      const session = schema.from(state)
      const {Pilot} = session
      // const pilot = Pilot.create(action.payload.pilotDetails)
      Pilot.create(action.payload.pilotDetails)
      return session.reduce()
    default:
      return state
  }
}

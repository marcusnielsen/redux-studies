import React, {Component} from 'react'
import {connect} from 'react-redux'
import schema from './schema'
import {selectEntities} from './selectors'

export function mapState (state, ownProps) {
  const entities = selectEntities(state)
  const session = schema.from(entities)
  const {Pilot} = session
  const pilotModel = Pilot.withId(ownProps.pilotId)
  const pilot = pilotModel.ref
  const battlemech = pilotModel.mech.ref
  const lanceName = pilotModel.lance.lanceName
  return {pilot, battlemech, lanceName}
}

export class PilotAndMechDetails extends Component {
  render () {
    <div>test</div>
  }
}

export default connect(mapState)(PilotAndMechDetails)

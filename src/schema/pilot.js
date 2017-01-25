import {Model, fk, oneToOne} from 'redux-orm'

export default class Pilot extends Model {}
Pilot.modelName = 'Pilot'
Pilot.fields = {
  mech: fk('Battlemech'),
  lance: oneToOne('Lance')
}

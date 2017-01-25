import {Model, fk, oneToOne} from 'redux-orm'

export default class Battlemech extends Model {}
Battlemech.modelName = 'Battlemech'
Battlemech.fields = {
  mech: fk('Pilot'),
  lance: oneToOne('Lance')
}

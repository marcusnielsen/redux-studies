import {Model, many} from 'redux-orm'

export default class Lance extends Model {}
Lance.modelName = 'Lance'
Lance.fields = {
  mech: many('Pilot'),
  lance: many('Lance')
}

import {Schema} from 'redux-orm'
import {default as Battlemech} from 'battlemech'
import {default as Lance} from 'lance'
import {default as Pilot} from 'pilot'

const schema = new Schema()
schema.register(Pilot, Battlemech, Lance)
export default schema

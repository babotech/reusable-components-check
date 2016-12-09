import { Updater } from 'redux-elm'
import { ADD_INPUT } from './action_types'


const initialModel = {
  inputs: 1
}


export default new Updater(initialModel)
  .case(ADD_INPUT, model => ({ ...model, inputs: model.inputs + 1 }))
  .toReducer()

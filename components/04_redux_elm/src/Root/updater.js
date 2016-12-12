import { Updater, Matchers } from 'redux-elm'
import { ADD_INPUT } from './action_types'
import textInputUpdater, { init as textInputInit } from '../TextInput/updater'

const initialModel = {
  inputs: []
}


export default new Updater(initialModel)
  .case(
    ADD_INPUT,
    model => ({
      ...model,
      inputs: [...model.inputs, textInputInit]
    })
  )
  .case(
    'TextInput',
    (model, action) => {
      const idx = parseInt(action.matching.args.param, 10)

      return {
        ...model,
        inputs: model.inputs.map((textInputModel, inputIdx) => {
          if (inputIdx === idx) {
            return textInputUpdater(textInputModel, action)
          } else {
            return textInputModel
          }
        })
      }
    },
    Matchers.parameterizedMatcher
  )
  .toReducer()

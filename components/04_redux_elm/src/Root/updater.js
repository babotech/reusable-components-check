import { Updater, Matchers } from 'redux-elm'
import { ADD_INPUT } from './action_types'
import textInputUpdater, { init as textInputInit } from '../TextInput/updater'

const initialModel = {
  inputs: {
    geolocation: [
      textInputInit
    ],
    password: [
      textInputInit
    ]
  }
}


export default new Updater(initialModel)
  .case(
    ADD_INPUT,
    (model, { role }) => ({
      ...model,
      inputs: {
        ...model.inputs,
        [role]: [
          ...model.inputs[role],
          textInputInit
        ]
      }
    })
  )
  .case(
    'TextInput',
    (model, action) => {
      const { role, matching } = action
      const idx = parseInt(matching.args.param, 10)

      return {
        ...model,
        inputs: {
          [role]: model.inputs[role].map((textInputModel, inputIdx) => {
            if (inputIdx === idx) {
              return textInputUpdater(textInputModel, action)
            } else {
              return textInputModel
            }
          })
        }
      }
    },
    Matchers.parameterizedMatcher
  )
  .toReducer()

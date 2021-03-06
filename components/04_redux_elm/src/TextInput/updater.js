import {
  CHANGE_VALUE,
  INPUT_VALIDATION_SUCCEEDED,
} from './action_types'

import { Updater } from 'redux-elm'
import saga from './sagas.js'


export const init = {
  value: '',
  isValid: true
}


export default new Updater(init, saga)
  .case(
    CHANGE_VALUE,
    (model, { payload }) => ({
      ...model,
      value: payload.value
    })
  )
  .case(
    INPUT_VALIDATION_SUCCEEDED,
    (model, { payload }) => ({
      ...model,
      inputs: payload.isValid
    })
  )
  .toReducer()

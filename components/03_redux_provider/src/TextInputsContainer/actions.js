import {
  CHANGE_VALUE,
  INPUT_VALIDATION_REQUESTED
} from './action_types'

import { createAction } from 'redux-actions'


export const editInput = createAction(CHANGE_VALUE)
export const requestInputValidation = createAction(INPUT_VALIDATION_REQUESTED)

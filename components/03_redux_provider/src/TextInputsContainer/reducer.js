import {
  ADD_INPUT,
  CHANGE_VALUE,
  INPUT_VALIDATION_REQUESTED,
  INPUT_VALIDATION_SUCCEEDED,
  INPUT_VALIDATION_FAILED
} from './action_types'


const initialState = {
  value: '',
  isValid: true
}


export default (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_VALUE:
      return { ...state, value: action.payload.value }

    case INPUT_VALIDATION_SUCCEEDED:
      return { ...state, isValid: action.payload.isValid }

    default:
      return state

  }
}

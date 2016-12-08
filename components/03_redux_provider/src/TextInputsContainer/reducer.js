import {
  ADD_INPUT,
  CHANGE_VALUE,
  INPUT_VALIDATION_REQUESTED,
  INPUT_VALIDATION_SUCCEEDED,
  INPUT_VALIDATION_FAILED
} from './action_types'


const initialState = [
  {
    id: 1,
    value: '',
    isValid: true
  }
]


export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_INPUT:
      return [
        ...state,
        {
          id: state.reduce((maxId, input) => Math.max(input.id, maxId), -1) + 1,
          value: action.payload.value,
          isValid: true
        }
      ]

    case CHANGE_VALUE:
      return state.map(input =>
        input.id === action.payload.id ?
          { ...input, value: action.payload.value } :
          input
      )

    case INPUT_VALIDATION_SUCCEEDED:
      return state.map(input =>
        input.id === action.payload.id ?
          { ...input, isValid: action.payload.isValid } :
          input
      )

    default:
      return state

  }
}

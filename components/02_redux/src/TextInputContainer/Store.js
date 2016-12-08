import {
  ADD_INPUT,
  CHANGE_VALUE,
  INPUT_VALIDATION_REQUESTED,
  INPUT_VALIDATION_SUCCEEDED,
  INPUT_VALIDATION_FAILED
} from './action_types'


const initialState = {
  default: [
    {
      id: 1,
      value: '',
      isValid: true
    }
  ],

  left: [
    {
      id: 1,
      value: '',
      isValid: true
    }
  ],

  right: [
    {
      id: 1,
      value: '',
      isValid: true
    }
  ]
}


export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_INPUT:
      return {
        ...state,
        [action.side]: [
          ...state[action.side],
          {
            id: state[action.side].reduce((maxId, input) => Math.max(input.id, maxId), -1) + 1,
            value: action.payload.value,
            isValid: true
          }
        ]
      }

    case CHANGE_VALUE:
      return {
        ...state,
        [action.side]: state[action.side].map(input =>
          input.id === action.payload.id ?
            { ...input, value: action.payload.value } :
            input
        )
      }

    case INPUT_VALIDATION_SUCCEEDED:
      return {
        ...state,
        [action.side]: state[action.side].map(input =>
          input.id === action.payload.id ?
            { ...input, isValid: action.payload.isValid } :
            input
        )
      }

    default:
      return state

  }
}


export const addInput = ({side = 'default', value = ''}) => ({
  side,
  type: ADD_INPUT,
  payload: {
    value
  }
})


export const editInput = ({side = 'default', id, value}) => ({
  side,
  type: CHANGE_VALUE,
  payload: {
    id,
    value
  }
})


export const requestInputValidation = ({side = 'default', id}) => ({
  type: INPUT_VALIDATION_REQUESTED,
  payload: {
    id,
    side
  }
})

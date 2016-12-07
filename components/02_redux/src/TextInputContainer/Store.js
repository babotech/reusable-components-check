const ADD_INPUT = 'ADD_INPUT'
const CHANGE_VALUE = 'CHANGE_VALUE'


const initialState = {
  default: [
    {
      id: 1,
      value: ''
    }
  ],

  left: [
    {
      id: 1,
      value: ''
    }
  ],

  right: [
    {
      id: 1,
      value: ''
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
            value: action.payload.value
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

    default:
      return state

  }
}


export const addInput = ({side = 'default', value}) => ({
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

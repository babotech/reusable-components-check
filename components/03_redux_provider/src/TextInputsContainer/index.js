import './index.css'

import {
  addInput,
  editInput,
  requestInputValidation
} from './actions'

import { createStore, applyMiddleware } from 'redux'
import React from 'react'
import Input from '../pure_components/Input'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import textInputSaga from './sagas'
import { local } from 'redux-fractal'


const TextInputs = ({
  defaultValue = '',
  editInput,
  textInputs,
  requestInputValidation
}) =>
  <div>
    {textInputs.map(t =>
        <div className="TextInput" key={t.id}>
          <Input
            className={t.isValid ? 'TextInput__input' : 'TextInput__input--invalid'}
            onChange={e => editInput({ id: t.id, value: e.target.value })}
            type={'text'}
            value={t.value || defaultValue}
          />
          <a
            className={'TextInput__button'}
            onClick={() => requestInputValidation({ id: t.id })}
          >
            Validate
          </a>
        </div>
    )}
  </div>


//
export default local({
  key: 'textInputsContainer',
  createStore: props => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(textInputSaga)

    return {
      store,
      cleanup: () => sagaMiddleware.cancel()
    }
  },
  mapDispatchToProps: dispatch => {
    addInput: props => dispatch(addInput(props))
    editInput: props => dispatch(editInput(props))
    requestInputValidation: props => dispatch(requestInputValidation(props))
  }
})(TextInputs)

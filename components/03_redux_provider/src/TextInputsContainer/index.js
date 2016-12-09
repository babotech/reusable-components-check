import './index.css'

import * as actionCreators from './actions'
import React, { PropTypes } from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import reducer from './reducer'
import textInputsSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import Input from '../pure_components/Input'


let Wrapped = ({
  editInput,
  isValid,
  requestInputValidation,
  value
}) =>
  <div className="TextInput">
    <Input
      className={isValid ? 'TextInput__input' : 'TextInput__input--invalid'}
      onChange={e => editInput({ value: e.target.value })}
      type={'text'}
      value={value}
    />
    <a
      className={'TextInput__button'}
      onClick={() => requestInputValidation()}
    >
      Validate
    </a>
  </div>


const mapStateToProps = s => s
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actionCreators, dispatch)
})
Wrapped = connect(mapStateToProps, mapDispatchToProps)(Wrapped)


export default class Container extends React.Component {
  constructor(props) {
    super(props)

    const { defaultValue = '' } = this.props

    const state = {
      value: defaultValue,
      isValid: true
    }

    const sagaMiddleware = createSagaMiddleware()

    this.store = createStore(
      reducer,
      state,
      applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(textInputsSaga)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Wrapped />
      </Provider>
    )
  }
}

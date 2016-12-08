import './index.css'
import * as actionCreators from './Store'
import React from 'react'
import { connect } from 'react-redux'
import Input from '../pure_components/Input'


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


const mapStateToProps = state => ({
  textInputs: state.textInputs
})


const mergeProps = (state, actions, props) => {
  return Object.assign({}, props, {
    textInputs: state.textInputs[props.side],
    editInput: editProps => actions.editInput({ ...editProps, side: props.side }),
    requestInputValidation: validateProps => actions.requestInputValidation({ ...validateProps, side: props.side })
  })
}


export default connect(
  mapStateToProps,
  actionCreators,
  mergeProps
)(TextInputs)

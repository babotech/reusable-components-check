import './index.css'
import * as actionCreators from './Store'
import React from 'react'
import { connect } from 'react-redux'
import Input from '../pure_components/Input'


const TextInputs = ({
  defaultValue = '',
  editInput,
  textInputs
}) =>
  <div>
    {textInputs.map(t =>
        <Input
          className={'TextInput'}
          key={t.id}
          onChange={e => editInput({ id: t.id, value: e.target.value })}
          type={'text'}
          value={t.value || defaultValue}
        />
    )}
  </div>


const mapStateToProps = state => ({
  textInputs: state.textInputs
})


const mergeProps = (state, actions, props) => {
  return Object.assign({}, props, {
    textInputs: state.textInputs[props.side],
    editInput: params => actions.editInput({ ...params, side: props.side })
  })
}


export default connect(
  mapStateToProps,
  actionCreators,
  mergeProps
)(TextInputs)

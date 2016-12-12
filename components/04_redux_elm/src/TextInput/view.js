import './index.css'

import {
  editInput,
  requestInputValidation
} from './actions'

import React, { PropTypes } from 'react'
import Input from './pure_components/Input'
import { view } from 'redux-elm'


export default view(({ model, dispatch }) =>
  <div className="TextInput">
    <Input
      className={model.isValid ? 'TextInput__input' : 'TextInput__input--invalid'}
      onChange={e => dispatch(editInput({ value: e.target.value }))}
      type={'text'}
      value={model.value}
    />
    <a
      className={'TextInput__button'}
      onClick={() => dispatch(requestInputValidation())}
    >
      Validate
    </a>
  </div>
)

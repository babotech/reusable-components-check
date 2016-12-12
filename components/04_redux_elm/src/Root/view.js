import './styles.css'
import React, { Component } from 'react'
import { view, forwardTo } from 'redux-elm'
import logo from './logo.svg'
import { addInput } from './actions'
import TextInput from '../TextInput/view'


export default view(({ model, dispatch }) =>
  <div className="Root">
    <div className="Root-header">
      <img src={logo} className="Root-logo" alt="logo" />
      <h2>Redux Elm</h2>
    </div>
    <div className="Root-body">

      <div className="Root-body__column">
        <a className="Root__button" onClick={() => dispatch(addInput({role: 'password'}))}>Add input</a>

        {!!model.inputs.password.length && model.inputs.password.map((inputModel, idx) =>
          <TextInput
            role={'password'}
            key={`password-${idx}`}
            model={inputModel}
            dispatch={forwardTo(dispatch, 'TextInput', idx)}
            defaultValue="Hey!"
          />
        )}
      </div>

      <div className="Root-body__column">
        <a className="Root__button" onClick={() => dispatch(addInput())}>Add input</a>

        {!!model.inputs.geolocation.length && model.inputs.geolocation.map((inputModel, idx) =>
          <TextInput
            role={'geolocation'}
            key={`geolocation-${idx}`}
            model={inputModel}
            dispatch={forwardTo(dispatch, 'TextInput', idx)}
            defaultValue="Hi there."
          />
        )}
      </div>

    </div>
  </div>
)

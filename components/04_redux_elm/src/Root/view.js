import './styles.css'
import React, { Component } from 'react'
import { view } from 'redux-elm'
import logo from './logo.svg'
// import { addInput } from './actions'
import TextInput from './TextInput'


class Root extends Component {
  render() {
    return (
      <div className="Root">
        <div className="Root-header">
          <img src={logo} className="Root-logo" alt="logo" />
          <h2>Redux Elm</h2>
        </div>
        <p className="Root-intro">
          To get started, edit <code>src/Root.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default view(({ model, dispatch }) =>
  <div className="Root">
    <div className="Root-header">
      <img src={logo} className="Root-logo" alt="logo" />
      <h2>Redux Elm</h2>
    </div>
    <div className="Root-body">

      <div className="Root-body__column">
        <TextInput defaultValue="Hey!" />
        <TextInput defaultValue="Ho!" />
        <TextInput defaultValue="Let's go!" />
      </div>

      <div className="Root-body__column">
        {/* <a className="Root__button" onClick={() => dispatch(addInput())}>Add input</a> */}

        {[...Array(model.inputs)].map((el, idx) =>
          <TextInput key={idx} defaultValue="Hi there." />
        )}
      </div>

    </div>
  </div>
)

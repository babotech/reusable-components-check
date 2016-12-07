import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TextInputContainer from './TextInputContainer'
import { connect } from 'react-redux'
import * as inputActionCreators from './TextInputContainer/Store'
import { bindActionCreators } from 'redux'


class App extends Component {
  render() {
    const { addInput } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux</h2>
        </div>
        <div className="App-body">
          <div className="App-body__column">
            <a className="App__button" onClick={() => addInput({side: 'left', value: 'Left'})}>Add input</a>
            <TextInputContainer
              side={'left'}
            />
          </div>

          <div className="App-body__column">
            <a className="App__button" onClick={() => addInput({value: 'Center'})}>Add input</a>
            <TextInputContainer
              side={'default'}
              defaultValue={'Center -> defaultValue'}
            />
          </div>

          <div className="App-body__column">
            <a className="App__button" onClick={() => addInput({side: 'right', value: 'Right'})}>Add input</a>
            <TextInputContainer
              side={'right'}
            />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({ ...state })


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(inputActionCreators, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

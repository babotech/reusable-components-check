import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TextInput from './TextInput'

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
        inputs: 1
      }
      this.addInput = this.addInput.bind(this)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Local State</h2>
        </div>
        <div className="App-body">
          <a className="App__button" onClick={this.addInput}>Add input</a>

          {[...Array(this.state.inputs)].map((el, idx) =>
            <TextInput key={idx} defaultValue="Hi there, I came from props." />
          )}
        </div>
      </div>
    )
  }

  addInput() {
    this.setState(prevState => ({
      inputs: prevState.inputs + 1
    }))
  }
}

export default App

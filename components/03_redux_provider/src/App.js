import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TextInputContainer from './TextInputsContainer'


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
          <h2>Welcome to React</h2>
        </div>
        <div className="App-body">

          <div className="App-body__column">
            <TextInputContainer defaultValue="Hey!" />
            <TextInputContainer defaultValue="Ho!" />
            <TextInputContainer defaultValue="Let's go!" />
          </div>

          <div className="App-body__column">
            <a className="App__button" onClick={this.addInput}>Add input</a>

            {[...Array(this.state.inputs)].map((el, idx) =>
              <TextInputContainer key={idx} defaultValue="Hi there." />
            )}
          </div>

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

import React, { Component } from 'react'
import './TextInput.css'

class TextInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.defaultValue || '',
      isValid: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  render() {
    return (
      <div className="TextInput">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={(this.state.isValid === null) ?
              '' :
              (this.state.isValid ? 'valid' : 'invalid')
          }
        />
      </div>
    )
  }

  handleChange(e) {
    const value = e.target.value

    this.setState(prevState => ({
      ...prevState,
      value
    }))
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
          this.validateInput()
      }
  }

  validateInput() {
      var isValid = Math.random() < 0.5
      setTimeout(() => this.setState({ isValid }), 2000)
  }
}

export default TextInput

import React, { Component } from 'react'
import './TextInput.css'

class TextInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.defaultValue || ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div className="TextInput">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
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
}

export default TextInput

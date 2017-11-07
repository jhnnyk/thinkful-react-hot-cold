import React from 'react'
import './guess-form.css'

export default class GuessForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  setText (text) {
    this.setState({
      text
    })
  }

  onSubmit (e) {
    e.preventDefault()
    if (this.state.text && this.props.handleSubmit) {
      this.props.handleSubmit(this.state.text)
    }
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input type='text' required='true'
          placeholder='Enter your guess'
          value={this.state.text}
          onChange={e => this.setText(e.target.value)}
        />
        <button type='submit'>Guess</button>
      </form>
    )
  }
}

import React from 'react'
import GuessStatus from './guess-status'
import GuessForm from './guess-form'
import GuessCount from './guess-count'
import GuessHistory from './guess-history'
import './guess-box.css'

export default class GuessBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      history: []
    }
  }

  formSubmit (input) {
    this.setState({
      history: [...this.state.history, input]
    })
  }

  render () {
    return (
      <div className='guessbox'>
        <GuessStatus />
        <GuessForm
          handleSubmit={input => this.formSubmit(input)}
        />
        <GuessCount count={this.state.history.length} />
        <GuessHistory history={this.state.history} />
      </div>
    )
  }
}

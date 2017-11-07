import React from 'react'
import GuessStatus from './guess-status'
import GuessForm from './guess-form'
import GuessCount from './guess-count'
import GuessHistory from './guess-history'
import ResetButton from './reset-button'
import './guess-box.css'

export default class GuessBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      theNumber: Math.floor(Math.random() * 100) + 1,
      history: []
    }
  }

  formSubmit (input) {
    this.setState({
      history: [...this.state.history, input]
    })
  }

  resetGame () {
    this.setState({
      theNumber: Math.floor(Math.random() * 100) + 1,
      history: []
    })
  }

  render () {
    return (
      <div>
        <div className='guessbox'>
          <GuessStatus
            correctNum={this.state.theNumber}
            lastGuess={this.state.history[this.state.history.length - 1]}
          />
          <GuessForm handleSubmit={input => this.formSubmit(input)} />
          <GuessCount count={this.state.history.length} />
          <GuessHistory history={this.state.history} />
        </div>
        <ResetButton handleReset={() => this.resetGame()} />
      </div>
    )
  }
}

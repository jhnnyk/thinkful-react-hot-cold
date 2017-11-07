import React from 'react'
import './guess-status.css'

export default class GuessStatus extends React.Component {
  render () {
    let status = <h3>Guess a Number from 1 - 100!</h3>
    let difference = Math.abs(this.props.lastGuess - this.props.correctNum)

    if (difference === 0) {
      status = <h3 className='winner'>You guessed it!</h3>
    } else if (difference < 10) {
      status = <h3 className='hot'>You're hot! Guess again!</h3>
    } else if (difference < 30) {
      status = <h3 className='warm'>You're slightly warm, guess again.</h3>
    } else {
      status = <h3 className='cold'>You're cold! Guess again.</h3>
    }

    return (
      <div>
        {status}
      </div>
    )
  }
}

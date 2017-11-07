import React from 'react'
import './guess-history.css'

export default class GuessHistory extends React.Component {
  render () {
    const guesses = this.props.history.map((guess, index) => {
      return <div className='pastGuess' key={index}>{guess}</div>
    })

    return (
      <div className='guessHistory'>
        {guesses}
      </div>
    )
  }
}

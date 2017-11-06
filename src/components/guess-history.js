import React from 'react'

export default class GuessHistory extends React.Component {
  render () {
    const guesses = this.props.history.map((guess, index) => {
      return <div key={index}>{guess.input}</div>
    })

    return (
      <div>
        {guesses}
      </div>
    )
  }
}
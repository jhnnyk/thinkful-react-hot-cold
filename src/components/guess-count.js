import React from 'react'

export default class GuessCount extends React.Component {
  render () {
    return (
      <div>
        <h3>Guess #{this.props.count}!</h3>
      </div>
    )
  }
}
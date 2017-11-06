import React from 'react'
import GuessStatus from './guess-status'
import GuessForm from './guess-form'
import GuessCount from './guess-count'
import GuessHistory from './guess-history'

export default class GuessBox extends React.Component {
  render () {
    return (
      <div>
        <GuessStatus />
        <GuessForm />
        <GuessCount />
        <GuessHistory />
      </div>
    )
  }
}

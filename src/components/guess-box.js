import React from 'react'
import GuessStatus from './guess-status'
import GuessForm from './guess-form'
import GuessCount from './guess-count'
import GuessHistory from './guess-history'

export default class GuessBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      history: []
    }
  }

  formSubmit (input) {
    this.setState({
      history: [...this.state.history, {input}]
    })
  }

  render () {
    return (
      <div>
        <GuessStatus />
        <GuessForm
          handleSubmit={input => this.formSubmit(input)}
        />
        <GuessCount />
        <GuessHistory history={this.state.history} />
      </div>
    )
  }
}

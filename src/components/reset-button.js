import React from 'react'
import './reset-button.css'

export default class ResetButton extends React.Component {
  render () {
    return (
      <div className='resetButton'>
        <button onClick={this.props.handleReset}>New Game</button>
      </div>
    )
  }
}
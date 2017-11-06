import React, { Component } from 'react'
import GuessBox from './guess-box'

class HotorCold extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Hot or Cold</h1>
        <GuessBox />
      </div>
    )
  }
}

export default HotorCold

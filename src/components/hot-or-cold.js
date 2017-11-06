import React, { Component } from 'react'
import Title from './title'
import GuessBox from './guess-box'

class HotorCold extends Component {
  render () {
    return (
      <div>
        <Title />
        <GuessBox />
      </div>
    )
  }
}

export default HotorCold

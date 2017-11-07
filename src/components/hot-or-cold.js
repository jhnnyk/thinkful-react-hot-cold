import React from 'react'
import GuessBox from './guess-box'

export default class HotorCold extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Hot or Cold</h1>
        <GuessBox />
      </div>
    )
  }
}

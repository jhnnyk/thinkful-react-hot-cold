import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import HotorCold from './components/hot-or-cold'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<HotorCold />, document.getElementById('root'))
registerServiceWorker()

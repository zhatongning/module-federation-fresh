import React from 'react'
import { upperFirst } from 'lodash-es'
import Widget from './Widget'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p style={{ fontSize: 20, color: 'blue' }}>App2</p>
        <p>{ upperFirst('hello world') }</p>
        <Widget />
      </header>
    </div>
  )
}

export default App

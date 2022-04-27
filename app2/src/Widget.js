import React, { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)

  return <div style={{ width: '100vw', height: '100px', border: '5px solid orange' }}>
    Widget Container
    <button onClick={ () => setCount(count + 1) }>Increasing</button>
    <p> 计数器： { count } </p>
  </div>
}
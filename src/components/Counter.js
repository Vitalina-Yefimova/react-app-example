import React, { useState } from 'react'
import './Counter.css'

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="Counter">
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click here to increase the counter
      </button>
    </div>
  )
}
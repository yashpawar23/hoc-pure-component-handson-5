import React, { useState } from 'react'
import './Component.css'

const HOCComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
            <div className='Component'>HOC Component Count <span className='count-increas'>{count}</span> </div>
            <button onClick={() => { setCount(count + 1) }} className='btn1'>Update Count</button>
        </div>
  )
}

export default HOCComponent




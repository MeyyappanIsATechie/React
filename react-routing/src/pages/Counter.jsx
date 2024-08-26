import React, { memo } from 'react'

const Counter = ({countValue, onClick}) => {
    console.log('counter click', countValue,onClick);
  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default  memo(Counter)

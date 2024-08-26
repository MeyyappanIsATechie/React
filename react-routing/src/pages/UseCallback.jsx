import React, { useCallback } from 'react'
import Counter from './Counter';

const UseCallback = () => {
  const [countValue1, setCountValue1] = React.useState(0);
  const [countValue2, setCountValue2] = React.useState(0);
  const memoCount1 = useCallback(()=>setCountValue1(countValue1+1),[countValue1]);
  const memoCount2 = useCallback(()=>setCountValue2(countValue2+1),[countValue2]);
  return (
    <div>
      <Counter countValue={countValue1} onClick={memoCount1}/>
      <Counter countValue={countValue2} onClick={memoCount2}/>
    </div>
  )
}

export default UseCallback

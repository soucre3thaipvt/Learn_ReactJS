import React, { useMemo, useState } from 'react'
import ContentMemo from './ContentMemo'
// memo ghi nhớ lại props của 1 component để có render lại component đó hay không để lưu lại component
// 1. memo() => Higher Oder Component (HOC)
// 2. useCallback()


export default function UseMemo() {
  const [show,setShow] = useState(false);
  const [count,setCount] = useState(0);
  return (
    <div>
      <h3>UseMemo</h3>
      <button onClick={()=>{setShow(!show)}}> Memo </button>
      {show && <ContentMemo count={count}/>}
      <h4>{count}</h4>
      <button onClick={() => { setCount(count + 1) }}> Memo Click</button>
    </div>
  )
}

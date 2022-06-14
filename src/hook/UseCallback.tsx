import React, { memo, useCallback, useState } from 'react'
import ContentMemo from './ContentMemo';

// useCallback() // tránh tạo ra hàm function mới, tránh re-render ko cần thiết, tương tự như meno, tránh re-render lại component con
//  - Reference types
//  - React memo()
// component nào có meno thì có callback// callback phải bắt buộc có meno
export default function UseCallback() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((preState) => preState + 1);
    // lưu lại tham chiếu ra ngoài hàm function
  };
  return (
    <div>
      <h3>UseCallback</h3>
      <button onClick={() => { setShow(!show) }}> Callback </button>
      {show && <ContentMemo onIncrease={increase} />}
      <h4>{count}</h4>
    </div>
  )
}

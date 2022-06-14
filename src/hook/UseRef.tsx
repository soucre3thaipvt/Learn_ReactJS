import React, { useState, useRef, useEffect } from 'react'
// Lưu các giá trị qua một tham chiếu bên ngoài
// function component
export default function UseRef() {
  const [count, setCount] = useState(60)
  const countRef:any = useRef()

  // cách lấy giá trị trước đó
  const preCount:any = useRef();
  useEffect(() => {
    // luôn được gọi một lần: render UI rồi đến useEffect
    preCount.current = count;
  }, [count]);

  const h3Ref:any = useRef();
  useEffect(() => {
    console.log( h3Ref.current.getBoundung);
  }, []);
  const handleStart =()=>{
    countRef.current = setInterval(()=>{
      setCount(prev=>prev-1)
    },1000)
  }
  const handleStop =()=>{
    clearInterval(countRef.current)
  }
  console.log(count, preCount.current);
  return (
    <div>
      <h3>UseRef</h3>
      <h3 ref={h3Ref}>{count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

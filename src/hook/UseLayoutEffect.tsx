import React , {useLayoutEffect, useState} from 'react'
// 1. Cập nhập lại state
// 2. cập nhập lại DOM
// 3. cleanup nếu deps thay đổi (sync)
// 4. useLayoutEffect callback (sync)
// 5. Render lại UI
export default function UseLayoutEffect() {
  const [count, setCount] = useState(0)
  // khi count = 4 khi render, UI sẽ không hiện số 4 nữa , dùng useEffect khi render UI sẽ hiện số 4 chuyển về 3 rất nhanh ( chớp nhoáng )
  // đó là lý do dùng useLayoutEffect
  useLayoutEffect(()=>{
    if (count>3){
      setCount(0)
    }
  },[count])

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <h4>{count}</h4>
      <button onClick={()=>{setCount(count+1)}}>RUN</button>
    </div>
  )
}

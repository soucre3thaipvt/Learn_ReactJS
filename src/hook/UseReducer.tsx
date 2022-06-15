import React, { useState, useReducer } from 'react'
import { useRef } from 'react'
import RenderTodos from './todos'
// Cung cấp cho ng dùng thêm 1 sự lựa chọn để sử dụng state cho function component
// useState
// 1. init state 0
// 2. action: up (state +1) // down (state -1)

// useReducer // thường dùng cho xử lý mảng or Object
// 1. init state 0
// 2. action: up (state +1) // down (state -1)
// 3. Reducer
// 4. Dispatch


const tabs = ['Basic', 'Todos', 'Recap']
const SwitchTabsMain = ({ type }: any) => {
  switch (type) {
    case tabs[0]:
      return <RenderBasic></RenderBasic>
    case tabs[1]:
      return <RenderTodos></RenderTodos>
    case tabs[2]:
      return <RenderRecap></RenderRecap>
    default:
      return <RenderBasic></RenderBasic>

  }
}
const RenderMain = () => {
  const [type, setType] = useState('Basic')
  return <div>
    {tabs.map(item =>
      <button
        style={item === type ? { color: 'white', backgroundColor: 'orange', margin: 10 } : { margin: 10 }}
        //@ts-ignore
        onClick={() => { setType(item) }}>
        {item}
      </button>)}
    <SwitchTabsMain type={type} />
  </div>
}
const RenderBasic = () => {
  // init state
  const initState = 0

  // actions
  const UP_ACTION = 'UP_ACTION'
  const DOWN_ACTION = 'DOWN_ACTION'

  const reducer = (state: any, action: any) => {
    console.log('Khong phai ham khoi tao lan dau khi ko co dispacht nào được gọi');

    switch (action) {
      case UP_ACTION:
        return state + 1
      case DOWN_ACTION:
        return state - 1
      default:
        throw new Error('Invalid action')
    }
  }
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      <h5>{count}</h5>
      <button
        onClick={() => { dispatch(DOWN_ACTION) }}
      >Down</button>
      <button
        onClick={() => { dispatch(UP_ACTION) }}
      >Up</button>
    </div>
  )
}

const RenderRecap = () => {
  return (
    <div>
      <h4>Tối ưu lại code Todo App</h4>
      <h4>Chia nhỏ ra các file vào folder todos</h4>
    </div>
  )
}
export default function UseReducer() {


  return (
    <div>
      <h3>UseReducer</h3>
      <br />
      <RenderMain />
    </div>
  )
}

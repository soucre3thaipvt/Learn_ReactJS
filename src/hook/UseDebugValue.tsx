import React, { useState, useReducer } from 'react'

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
  return (
    <div>
      Loại bỏ, không học nữa
    </div>
  )
}
const RenderTodos = ()=>{
 return(
   <div>

   </div>
 )
}
const RenderRecap = ()=>{
  return(
    <div>
 
    </div>
  )
 }
export default function UseDebugValue() {


  return (
    <div>
      <h3>UseDebugValue</h3>
      <br/>
      <RenderMain />
    </div>
  )
}

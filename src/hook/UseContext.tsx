import React, { useState, useContext } from 'react'
//@ts-ignore
import { ThemeContext } from '../config/ThemeContext'
//Context
// CompA => CompB => CompC // cos Context thì truyền thẳng từ CompA => CompC

//  Theme: Dark / Light

// 1. Create Context
// 2. Provider // ôm thằng component Cha , có thể là ôm cả index.js của App
// 3. Consumer // nhận dữ liệu

const tabs = ['CompA', 'CompB', 'CompC']
const SwitchTabsMain = ({ type }: any) => {
  switch (type) {
    case tabs[0]:
      return <RenderCompA />
    case tabs[1]:
      return <RenderCompB />
    case tabs[2]:
      return <RenderCompC />
    default:
      return <RenderCompA />

  }
}
const RenderMain = () => {
  const [type, setType] = useState('CompA')
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
const RenderCompA = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <div>
      <button onClick={themeContext.toggleTheme}>Toggle theme CompC</button>
      <RenderCompC />
    </div>
  )
}
const RenderCompB = () => {
  return (
    <div>

    </div>
  )
}
const RenderCompC = () => {
  const themeContext = useContext(ThemeContext)
  // provier có value là gì, thì useContext theme sẽ nhận cái value đó
  
  return (
    <p className={themeContext.theme}>

      Pellentesque habitant morbi tristique senectus et netus et malesuada fames {'\n'}
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, {'\n'}
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.  {'\n'}
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit{'\n'}
      amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum{'\n'}
      sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget{'\n'}
      tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim{'\n'}
      ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent{'\n'}
      dapibus, neque id cursus faucibus, tortor neque egestas augue, eu{'\n'}
      vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt{'\n'}
      quis, accumsan porttitor, facilisis luctus, metus

    </p>
  )
}
export default function UseContext() {


  return (
    <div>
      <h3>UseContext</h3>
      <br />
      <RenderMain />
    </div>
  )
}

import React, { useState } from 'react'
import hook from '../hook'
import labQuiz from '../labQuiz'
import DOMEvent from '../labQuiz/DOMEvent'
//@ts-ignore
import { ThemeProvider } from "../config/ThemeContext";
export default function ExamplePages() {
    const [showProps, setshowProps] = useState(false)
    const [showDOMEvent, setShowDOMEvent] = useState(false)
    const [showHook, setShowHook] = useState(false)


    const aa = [
        { name: 'ahihi' },
        { name: 'nhieu ahihi' },
        { name: 'cuc nhieu ahihi' }
    ]
    const tabs = ['Props', 'DOM Event', 'All Hook']
    const tabHooks = ['useState', 'useEffect', 'useCallback', 'useLayoutEffect', 'useRef', 'useMemo', 'useReducer', 'useContext', 'useDebugValue', 'useImperativeHandle',]
    const SwitchTabsHook = ({ type }: any) => {
        switch (type) {
            case tabHooks[0]:
                return <hook.UseState />
            case tabHooks[1]:
                return <hook.UseEffect />
            case tabHooks[2]:
                return <hook.UseCallback />
            case tabHooks[3]:
                return <hook.UseLayoutEffect />
            case tabHooks[4]:
                return <hook.UseRef />
            case tabHooks[5]:
                return <hook.UseMemo />
            case tabHooks[6]:
                return <hook.UseReducer />
            case tabHooks[7]:
                return <hook.UseContext />
            case tabHooks[8]:
                return <hook.UseDebugValue />
            case tabHooks[9]:
                return <hook.UseImperativveHandle />
            default:
                return <hook.UseState />

        }
    }
    const SwitchTabsMain = ({ type }: any) => {
        switch (type) {
            case tabs[0]:
                return <RenderPops />
            case tabs[1]:
                return <RenderDOMEvent />
            case tabs[2]:
                return <RenderHook />
            default:
                return <RenderPops />

        }
    }
    const RenderPops = () => {
        return <>
            <labQuiz.Props title={'Ahihi'} data={aa} />
            {console.log(<labQuiz.Props title={'Ahihihi'} content={'ohihihi'} data={aa} />,
                'ra obj props co cac params: title || content / có thể thêm props, đang bị giới hạn do model props truyền vào nên chỉ có 2 param')}
        </>
    }
    const RenderDOMEvent = () => {
        return <>
            <DOMEvent title={"Dom Event"} href={'https://fullstack.edu.vn/'} onClick={() => { console.log('Da click') }} />
            <DOMEvent title={'Click me'} isPrimary >
                <h1>Props child</h1>
                <p>Chill the ak</p>
            </DOMEvent>
        </>
    }
    const RenderHook = () => {

        const [type, setType] = useState('useState')
        return <div>
            <h3>Đây là hook Xin chao 500 anh em nha </h3>
            {tabHooks.map(item =>
                <button
                    style={item === type ? { color: 'white', backgroundColor: 'green', margin: 10 } : { margin: 10 }}
                    //@ts-ignore
                    onClick={() => { setType(item) }}>
                    {item}
                </button>)}
            <SwitchTabsHook type={type} />

        </div>
    }
    const RenderMain = () => {
        const [type, setType] = useState('Props')
        return <div>
            {tabs.map(item =>
                <button
                    style={item === type ? { color: 'white', backgroundColor: 'red', margin: 10 } : { margin: 10 }}
                    //@ts-ignore
                    onClick={() => { setType(item) }}>
                    {item}
                </button>)}
            <SwitchTabsMain type={type} />
        </div>
    }
    return (
        //@ts-ignore
        <ThemeProvider >
            <div style={{ textAlign: 'center', marginBottom: 500 }}>
                <h1>ExamplePages</h1>
                <br />
                <RenderMain />
            </div>
        </ThemeProvider>
    )
} 

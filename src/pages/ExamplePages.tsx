import React, { useState } from 'react'
import hook from '../hook'
import labQuiz from '../labQuiz'
import DOMEvent from '../labQuiz/DOMEvent'
export default function ExamplePages() {
    const [showProps, setshowProps] = useState(false)
    const [showDOMEvent, setShowDOMEvent] = useState(false)
    const [showHook, setShowHook] = useState(false)


    const aa = [
        { name: 'ahihi' },
        { name: 'nhieu ahihi' },
        { name: 'cuc nhieu ahihi' }
    ]
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
        return <div>
            <h3>Xin chao 500 anh em nha</h3>
            <hook.UseState />
            <hook.UseEffect />
            <hook.UseLayoutEffect />
            <hook.UseRef />
            <hook.UseMemo />
            <hook.UseCallback />
        </div>
    }
    return (
        //@ts-ignore
        <div style={{ textAlign: 'center', marginBottom: 500 }}>
            <h1>ExamplePages</h1>
            <br />

            <button onClick={() => setshowProps(!showProps)}>Render Props</button>
            {showProps && <RenderPops />}
            <br /><br />
            <button onClick={() => setShowDOMEvent(!showDOMEvent)}>Render DOM Event</button>
            {showDOMEvent && <RenderDOMEvent />}
            <br /><br />
            <button onClick={() => setShowHook(!showHook)}>Render Hook</button>
            {showHook && <RenderHook />}

        </div>
    )
} 

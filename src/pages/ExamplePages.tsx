import React from 'react'
import hook from '../hook'
import labQuiz from '../labQuiz'
import DOMEvent from '../labQuiz/DOMEvent'
export default function ExamplePages() {
    const aa = [
        { name: 'ahihi' },
        { name: 'nhieu ahihi' },
        { name: 'cuc nhieu ahihi' }
    ]
    return (
        //@ts-ignore
        <div style={{ textAlign: 'center' }}>
            <h1>ExamplePages</h1>
            <br />
            <labQuiz.Props title={'Ahihi'} data={aa}/>
            {console.log(<labQuiz.Props title={'Ahihihi'} content={'ohihihi'} data={aa}/>,
             'ra obj props co cac params: title || content / có thể thêm props, đang bị giới hạn do model props truyền vào nên chỉ có 2 param')}
            <DOMEvent title={"Dom Event"} href={'https://fullstack.edu.vn/'} onClick={()=>{console.log('Da click')}}/>
            <DOMEvent title={'Click me'} isPrimary >
                <h1>Props child</h1>
                <p>Chill the ak</p>
            </DOMEvent>
        </div>
    )
} 

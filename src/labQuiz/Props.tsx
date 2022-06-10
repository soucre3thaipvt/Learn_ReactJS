import React from 'react'

export default function Props(props: {
    title?: String,
    content?: String,
    data?: { name?: String }[];
    callBack?: ;
}) {
    return (
        <div>
            <h3>Tất tần tật về Props</h3>
            <h4>Props Element</h4>
            <label htmlFor='email'>Email</label>
            <input id='email' />
            <h4>Props Component {props?.title}</h4>
            {props.content && <p>{props.content}</p>}
            {/* {props.data && (props.data.map((e, i) => { <p key={i}>{e.name}</p> }))} */}
        </div>
    )
}

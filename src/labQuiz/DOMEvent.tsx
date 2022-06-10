import React from 'react'

export default function DOMEvent(props: { title: String, href?: String, onClick?: () => void }) {
    let Component: any = 'button';
    let propsChilds = {};
    if (props.href) {
        Component = 'a';
        // @ts-ignore
        propsChilds.href = props.href;
    }
    if (props.onClick) {
        //@ts-ignore
        propsChilds.onClick = props.onClick;
    }

    console.log('dddddddddddd', props)
    return (
        <div>
            <h3>DOM Event</h3>
            <div>{props.title}</div>
            <Component {...propsChilds}>{props.title}</Component>
        </div>
    )
}

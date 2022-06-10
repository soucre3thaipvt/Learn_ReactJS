import React from 'react'

export default function DOMEvent(props: { title: String, href?: String, onClick?: () => void , isPrimary?: boolean, children?:any}) {
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
    console.log('isPrimary', props.isPrimary, props.children)
    return (
        <div>
            <h3>DOM Event</h3>
            <Component {...propsChilds}>{props.title}</Component>
            {props.children}
        </div>
    )
}

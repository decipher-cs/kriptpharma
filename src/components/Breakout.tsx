import { PropsWithChildren } from 'react'

export default function Breakout(
    props: { className?: string | undefined } & PropsWithChildren
) {
    return (
        <div className={'-mx-breath lg:-mx-breath-lg ' + props.className}>
            {props.children}
        </div>
    )
}

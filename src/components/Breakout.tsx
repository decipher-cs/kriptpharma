import { CSSProperties, PropsWithChildren } from 'react'

/*
 * This component negates the effects of the following code:
 * className="px-breath lg:px-breath"
 * which is set in the <main/> tag of __root
 */
export default function Breakout(
    props: {
        className?: string | undefined
        style?: CSSProperties | undefined
    } & PropsWithChildren
) {
    return (
        <div
            className={'-mx-breath lg:-mx-breath-lg ' + props.className}
            style={props.style}
        >
            {props.children}
        </div>
    )
}

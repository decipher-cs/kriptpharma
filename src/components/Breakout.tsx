import { CSSProperties, DetailedHTMLProps, HTMLAttributes, PropsWithChildren, memo } from 'react'

/*
 * This component negates the effects of the following code:
 * className="px-breath lg:px-breath"
 * which is set in the <main/> tag of __root
 */

export default memo(function Breakout(props: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
    const { className, ...rest } = props
    return (
        <div className={'-mx-breath lg:-mx-breath-lg ' + props.className} {...rest}>
            {props.children}
        </div>
    )
})

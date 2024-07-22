import React, { PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export default function InputWrapper(
    props: PropsWithChildren & {
        label: ReactNode
        className?: string
        errorMessage: undefined | string
    }
) {
    return (
        <div className={twMerge('form-control w-full', props.className)}>
            <label className={''}>
                <div className="label">
                    <span className="label-text flex items-center gap-2">{props.label}</span>
                </div>
                {props.children}
            </label>
            <p className="ml-1 mt-1 italic text-error">{props.errorMessage}&nbsp;</p>
        </div>
    )
}

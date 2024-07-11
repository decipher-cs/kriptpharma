import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { PiX } from 'react-icons/pi'

export const Alert = (props: { alertFor: string; text: string }) => {
    const { alertFor, text } = props

    const [showAlert, setShowAlert] = useState(
        window.localStorage.getItem(alertFor) !== 'false'
    )

    useEffect(() => {
        if (!showAlert) window.localStorage.setItem(alertFor, String(showAlert))
    }, [showAlert, alertFor])

    return (
        <article
            className={clsx(
                !showAlert && 'hidden',
                'flex items-center bg-primary py-5'
            )}
        >
            {/* TODO: Give a horizontal scroll bar*/}
            {/* TODO: Stop animation on hover*/}
            <div className={'overflow-hidden'}>
                <div className="grid w-min animate-horizontal-scroll grid-flow-col text-nowrap font-bold text-primary-content">
                    {text.toUpperCase()} {text.toUpperCase()}
                </div>
            </div>

            <button
                aria-label="Dismiss"
                className="btn-primary btn-sm"
                onClick={() => setShowAlert(false)}
            >
                <PiX size={30} />
            </button>
        </article>
    )
}

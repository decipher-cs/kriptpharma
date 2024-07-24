import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import { PiInfo, PiX } from 'react-icons/pi'

export const Alert = memo((props: { alertFor: string }) => {
    const { alertFor } = props

    const [showAlert, setShowAlert] = useState(window.localStorage.getItem(alertFor) !== 'false')

    useEffect(() => {
        if (!showAlert) window.localStorage.setItem(alertFor, String(showAlert))
    }, [showAlert, alertFor])

    return (
        <aside className={clsx(!showAlert && 'hidden', 'fixed bottom-0 z-10 w-full')}>
            <div
                role="alert"
                className="alert rounded-none border-none bg-primary text-primary-content"
            >
                <PiInfo size={25} />
                <span className="font-semibold">
                    Join Us at{' '}
                    <Link className="link" to="/exhibition">
                        Medi-Pharma Expo 2024
                    </Link>
                </span>

                <button
                    aria-label="Dismiss"
                    className="btn-primary btn-sm"
                    onClick={() => setShowAlert(false)}
                >
                    <PiX size={30} />
                </button>
            </div>
        </aside>
    )
})

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
            <div role="alert" className="flex items-center bg-secondary p-2 text-neutral-600">
                <Link
                    className="grow text-center text-lg font-semibold underline underline-offset-4 transition-transform hover:scale-125"
                    to="/exhibition"
                >
                    join us at Medi-Pharma Expo 2024!
                </Link>

                <button
                    aria-label="Dismiss"
                    className="btn btn-ghost btn-sm"
                    onClick={() => setShowAlert(false)}
                >
                    <PiX size={30} />
                </button>
            </div>
        </aside>
    )
})

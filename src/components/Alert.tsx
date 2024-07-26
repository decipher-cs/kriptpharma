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
                className="relative flex items-center bg-secondary p-2 text-neutral-700"
            >
                <span className="grow text-center text-lg font-semibold capitalize transition-transform hover:scale-110">
                    Meet us at Medi-Pharma Expo 2024!{' '}
                    <Link
                        to="/exhibition"
                        className="underline underline-offset-4"
                        aria-label="see details about medi-pharma expo 2024"
                    >
                        Know More
                    </Link>
                </span>

                <button
                    aria-label="Dismiss"
                    className="btn btn-ghost btn-sm absolute right-2"
                    onClick={() => setShowAlert(false)}
                >
                    <PiX size={20} />
                </button>
            </div>
        </aside>
    )
})

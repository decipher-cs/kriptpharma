import { Link, useRouterState } from '@tanstack/react-router'
import kriptPharmaLogoDark from '../assets/brand-logo/logo-dark.svg'
import kriptPharmaLogoLight from '../assets/brand-logo/logo-light.svg'
import kriptPharmaLogoCompactLight from '../assets/brand-logo/logo-light-compact.webp'
import kriptPharmaLogoCompactDark from '../assets/brand-logo/logo-dark-compact.webp'
import { memo, useState } from 'react'
import clsx from 'clsx'
import { PiList, PiX } from 'react-icons/pi'
import useMediaQuery from '../hooks/useMediaQuery'
import { screens } from 'tailwindcss/defaultTheme'

const Nav = memo(() => {
    const {
        location: { pathname },
    } = useRouterState()

    return (
        <>
            {[
                'Home',
                'About',
                'Product',
                'Equipment',
                'Catalogue',
                'Global Presence',
                'Gallery',
                'Exhibition',
                'Contact',
            ].map((path) => (
                <li key={path}>
                    <Link
                        to={'/' + path.replace(' ', '')}
                        className={clsx(
                            pathname.slice(1).toLowerCase() === path.toLowerCase() &&
                                'active font-bold'
                        )}
                    >
                        {path.toUpperCase()}
                    </Link>
                </li>
            ))}
        </>
    )
})

export const Header = memo(() => {
    const { queryMatches: isScreenSm } = useMediaQuery(`(max-width: ${screens.sm})`)

    const {
        location: { pathname },
    } = useRouterState()

    const isCurrRouteHome = ['/home', '/'].includes(pathname.toLowerCase())

    return (
        <div
            className={clsx(
                isCurrRouteHome ? 'absolute bg-transparent shadow-none' : 'bg-base-100 shadow-md',
                'navbar top-0 z-50 gap-2 py-3 transition-colors md:py-5'
            )}
        >
            <div className="max-w-56 shrink grow">
                <Link to="/" className="w-full sm:text-xl" aria-label="go to home">
                    {isScreenSm ? (
                        <img
                            src={
                                isCurrRouteHome
                                    ? kriptPharmaLogoCompactLight
                                    : kriptPharmaLogoCompactDark
                            }
                            alt="Kript Pharmaceuticals logo"
                            className="inline-block h-auto max-w-16"
                        />
                    ) : (
                        <img
                            src={isCurrRouteHome ? kriptPharmaLogoLight : kriptPharmaLogoDark}
                            alt="Kript Pharmaceuticals logo"
                            className="inline-block h-auto w-full"
                        />
                    )}
                </Link>
            </div>
            <ul
                className={clsx(
                    isCurrRouteHome && 'text-neutral-100',
                    'menu hidden shrink grow flex-nowrap justify-end gap-1 xl:menu-horizontal'
                )}
            >
                <Nav />
            </ul>
            <div className="flex-none grow justify-end justify-self-end xl:hidden">
                <Drawer />
            </div>
        </div>
    )
})

const Drawer = memo(() => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerMounted, setDrawerMounted] = useState(false)
    return (
        <>
            <button
                aria-label="open nav menu"
                className="btn"
                onClick={() => {
                    setDrawerOpen(true)
                    setDrawerMounted(true)
                }}
            >
                <PiList size={32} />
            </button>

            <section
                className={
                    'fixed inset-0 z-40 size-full transition' +
                    (drawerOpen ? ' backdrop-blur' : ' backdrop-blur-0') +
                    (drawerMounted ? ' visible' : ' invisible')
                }
                onClick={() => {
                    setDrawerOpen(false)
                }}
            />
            <section
                onClick={() => {
                    setDrawerOpen(false)
                }}
                className={
                    'fixed inset-x-0 inset-y-0 z-50 size-full transition-transform duration-500 ease-in-out sm:inset-x-1/3 md:inset-x-1/2' +
                    (drawerOpen ? ' translate-x-0' : ' translate-x-full') +
                    (drawerMounted ? ' visible' : ' invisible')
                }
                onTransitionEnd={(e) => {
                    const currTarget = e.currentTarget
                    const target = e.target
                    if (currTarget === target) {
                        if (drawerMounted && !drawerOpen) setDrawerMounted(false)
                    }
                }}
            >
                <div className={'size-full bg-base-100 p-2'}>
                    <button
                        aria-label="close menu"
                        className="btn btn-ghost ml-1"
                        onClick={() => setDrawerOpen(false)}
                    >
                        <PiX size={22} />
                    </button>
                    <ul className="menu gap-2">
                        <Nav />
                    </ul>
                </div>
            </section>
        </>
    )
})

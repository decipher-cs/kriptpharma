import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import kriptPharmaLogo from '../assets/kriptpharma-logo.png'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'
import useTheme from '../hooks/useTheme'
import ThemeProvider from '../context/theme'
import { ErrorPage } from '../view/PageNotFount'
import { Alert } from '../components/Alert'
import {
    PiPrinter,
    PiInstagramLogo,
    PiLinkedinLogo,
    PiMapPin,
    PiPhone,
    PiMailbox,
    PiFacebookLogo,
} from 'react-icons/pi'

export const Route = createRootRoute({
    component: () => (
        <>
            <ThemeProvider>
                <Header />
                <Alert alertFor="pharmaexpo">
                    Medivietnam pharmaexpo 2024 Saigon Exhibition 1st - 3rd
                    August 2024 Booth No. IP08
                </Alert>

                <main className="relative mx-auto mt-8 size-full min-h-svh max-w-12xl px-breath lg:px-breath-lg">
                    <Outlet />
                </main>

                <Footer />
                {import.meta.env.DEV && <TanStackRouterDevtools />}
            </ThemeProvider>
        </>
    ),
    notFoundComponent: () => <ErrorPage />,
})

const Nav = () => {
    return (
        <>
            {[
                'Home',
                'Product',
                'Equipment',
                'Downloads',
                'Certificate',
                'Global Presence',
                'Gallery',
                'Exhibition',
                'Contact',
            ].map((path) => (
                <li key={path}>
                    <Link
                        to={'/' + path.replace(' ', '')}
                        className="[&.active]:font-bold"
                    >
                        {path}
                    </Link>
                </li>
            ))}
        </>
    )
}

const Header = () => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className="navbar gap-2 bg-base-100">
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost btn-sm text-lg md:btn-md sm:text-xl"
                >
                    <img
                        src={kriptPharmaLogo}
                        alt="Kript Pharmaceuticals logo"
                        className="size-5 md:size-8"
                    />
                    Kriptpharma
                </Link>
            </div>
            <ul className="menu hidden gap-1 lg:menu-horizontal">
                <Nav />
            </ul>
            <div className="flex-none lg:hidden">
                <Drawer />
            </div>
            <label className="swap swap-rotate focus-within:[&:has(:focus-visible)]:outline">
                <input
                    type="checkbox"
                    className="theme-controller"
                    value="light"
                    checked={theme === 'light'}
                    onChange={(e) => {
                        changeTheme(e.target.checked ? 'light' : 'dark')
                    }}
                    aria-label="switch theme"
                />
                {/* moon icon */}
                <svg
                    className="swap-off size-6 fill-current sm:size-8 lg:size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
                {/* sun icon */}
                <svg
                    className="swap-on size-6 fill-current sm:size-8 lg:size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
            </label>
        </div>
    )
}

const Drawer = () => {
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
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
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
                        if (drawerMounted && !drawerOpen)
                            setDrawerMounted(false)
                    }
                }}
            >
                <div className={'size-full bg-base-100 p-2'}>
                    <button
                        aria-label="close menu"
                        className="btn btn-ghost ml-1"
                        onClick={() => setDrawerOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                    <ul className="menu gap-2">
                        <Nav />
                    </ul>
                </div>
            </section>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="footer mt-14 rounded bg-base-200 p-10">
                <div className="grid gap-2">
                    <h6 className="footer-title">Navigation</h6>
                    <nav className="grid gap-2">
                        {[
                            'Home',
                            'Product',
                            'Equipment',
                            'Downloads',
                            'Certificate',
                            'Global Presence',
                            'Gallery',
                            'Exhibition',
                            'Contact',
                        ].map((path) => (
                            <Link
                                className="link-hover link"
                                key={path}
                                to={'/' + path}
                            >
                                {path}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="grid gap-2">
                    <h6 className="footer-title">Quick Link</h6>
                    <nav className="grid gap-2">
                        <Link className="link-hover link" to="/downloads">
                            Catelogue
                        </Link>
                        <Link className="link-hover link" to="/product">
                            Medication
                        </Link>
                        <Link className="link-hover link" to="/contact">
                            Enquiry
                        </Link>
                        <Link className="link-hover link" to="/gallery">
                            Gallery
                        </Link>
                    </nav>
                </div>

                <div className="grid gap-2">
                    <h6 className="footer-title">Contact Details</h6>
                    <div className="grid gap-2 *:flex *:items-center *:gap-2">
                        <a href="mailto:kriptpharma@gmail.com">
                            <PiMailbox /> kriptpharma@gmail.com
                        </a>
                        <a href="tel:+917988522311">
                            <PiPhone /> (+91) 798-852-2311
                        </a>
                        <div>
                            <PiMapPin />
                            <p>
                                Sector-27/A, Plot No. 419, Pradhikaran,
                                <br />
                                Nigdi, Pune, Maharashtra, 411044
                            </p>
                        </div>
                    </div>
                </div>

                <form
                    className="grid gap-2"
                    onSubmit={(e) => {
                        e.preventDefault()
                        alert('you will hear from us soon :)')
                    }}
                >
                    <label htmlFor="inquiry" className="footer-title">
                        Get in touch
                    </label>
                    <div className="join">
                        <input
                            id="inquiry"
                            className="input  join-item input-bordered"
                            placeholder="Enter your email"
                            type="email"
                        />
                        {/* TODO: submit email somewhere */}
                        <button
                            className="btn join-item btn-neutral"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <div className="grid gap-2">
                    <h6 className="footer-title">Socials</h6>
                    <div className="flex gap-2">
                        <a
                            className="link-hover link"
                            href="https://www.instagram.com/kriptpharmaceuticals/"
                            target="_blank"
                        >
                            {' '}
                            <PiInstagramLogo className="size-8" />{' '}
                        </a>
                        <a
                            className="link-hover link"
                            href="https://www.linkedin.com/in/komal-singla-45a516239/"
                            target="_blank"
                        >
                            {' '}
                            <PiLinkedinLogo className="size-8" />{' '}
                        </a>
                        <a
                            className="link-hover link"
                            href="https://www.facebook.com/share/vLSvjtQ5igwYRuP1/?mibextid=LQQJ4d"
                            target="_blank"
                        >
                            {' '}
                            <PiFacebookLogo className="size-8" />{' '}
                        </a>
                    </div>
                </div>
            </footer>

            <footer className="footer footer-center rounded bg-base-200 px-10 pb-6">
                <aside className="col-start-1 row-start-2">
                    <a
                        className="link-hover link"
                        href="https://github.com/decipher-cs/"
                        target="_blank"
                    >
                        Copyright © 2024 Decipher . All rights reserved.
                    </a>
                </aside>
            </footer>
        </>
    )
}

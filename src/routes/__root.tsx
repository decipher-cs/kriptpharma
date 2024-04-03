import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import kriptPharmaLogo from '../assets/kriptpharma-logo.png'
import locationPin from '../assets/location-pin.svg'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { memo, useState } from 'react'
import useTheme from '../hooks/useTheme'
import ThemeProvider from '../context/theme'
import { ErrorPage } from '../view/PageNotFount'

export const Route = createRootRoute({
    component: () => (
        <>
            <ThemeProvider>
                <Header />
                <main className="relative mx-auto size-full min-h-svh max-w-10xl px-breath lg:px-breath-lg">
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
                'About',
                'Product',
                'Contact',
                'Certificate',
                'Global Presence',
                'Exhibition',
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
        <div className="navbar mb-6 gap-2 bg-base-100">
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
            <ul className="menu hidden gap-1 px-1 lg:menu-horizontal">
                <Nav />
            </ul>
            <div className="flex-none lg:hidden">
                <Drawer />
            </div>
            <label className="swap swap-rotate">
                <input
                    type="checkbox"
                    className="theme-controller"
                    value="light"
                    checked={theme === 'light'}
                    onChange={(e) => {
                        changeTheme(e.target.checked ? 'light' : 'dark')
                    }}
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
    return (
        <>
            <div className="drawer drawer-end z-40">
                <input
                    id="my-drawer-4"
                    type="checkbox"
                    checked={drawerOpen}
                    onChange={(e) => setDrawerOpen(e.target.checked)}
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <label
                        htmlFor="my-drawer-4"
                        className="btn drawer-button btn-sm"
                    >
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 512 512"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <ul
                        className="menu h-full w-1/2 gap-2 bg-base-200 p-3 px-2"
                        onClick={() => setDrawerOpen(false)}
                    >
                        <Nav />
                    </ul>
                </div>
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <footer className="footer footer-center mt-14 rounded bg-base-200 p-10 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                <Link to="/about">About us</Link>
                <Link to="/product">Catelog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <p className="block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-1 inline-block h-4"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                Sector-27/A, Plot No. 419, Pradhikaran, Nigdi, Pune,
                Maharashtra, 411044
            </p>
            <aside>
                <p>
                    Copyright © 2024 - All right reserved. Icons by
                    <a href="https://svgmix.com/">svgmix</a>
                </p>
            </aside>
        </footer>
    )
}

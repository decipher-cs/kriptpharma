import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import kriptPharmaLogo from '../assets/kriptpharma-logo.png'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { memo, useState } from 'react'

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <main className="relative mx-auto size-full min-h-svh max-w-10xl px-breath lg:px-breath-lg">
                <Outlet />
            </main>
            <Footer />
            {import.meta.env.DEV && <TanStackRouterDevtools />}
        </>
    ),
    notFoundComponent: () => <ErrorPage />,
})

const Nav = memo(() => {
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
})
const Header = memo(() => {
    return (
        <div className="navbar mb-6 gap-2 bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">
                    <img
                        src={kriptPharmaLogo}
                        alt="Kript Pharmaceuticals logo"
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
                />

                {/* moon icon */}
                <svg
                    className="swap-off size-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
                {/* sun icon */}
                <svg
                    className="swap-on size-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
            </label>
        </div>
    )
})

const Drawer = memo(() => {
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
                <div className=" drawer-content">
                    <label
                        htmlFor="my-drawer-4"
                        className="btn drawer-button btn-md"
                    >
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
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
                        className="menu min-h-full w-80 gap-2 bg-base-200 p-3 px-2"
                        onClick={() => setDrawerOpen(false)}
                    >
                        <Nav />
                    </ul>
                </div>
            </div>
        </>
    )
})

const Footer = memo(() => {
    return (
        <footer className="footer footer-center mt-14 rounded bg-base-200 p-10 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                <a className="link-hover link">About us</a>
                <a className="link-hover link">Contact</a>
                <a className="link-hover link">Jobs</a>
                <a className="link-hover link">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p>
                    Copyright © 2024 - All right reserved by ACME Industries
                    Ltd. Icon by <a href="https://svgmix.com/">svgmix</a>
                </p>
            </aside>
        </footer>
    )
})

const ErrorPage = () => {
    return (
        <div className="grid h-screen place-content-center px-4">
            <div className="space-y-7 text-center">
                <h1 className="text-9xl font-black">404</h1>
                <p className="text-2xl font-bold tracking-tight sm:text-4xl">
                    Page Not Found!
                </p>
                <p className="text-base-content">We can't find that page.</p>
                <Link to={'/'} className="btn btn-primary">
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

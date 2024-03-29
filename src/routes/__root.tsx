import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'

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
    return (
        <div className="navbar mb-6 gap-2 bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">
                    Kriptpharma
                </Link>
            </div>
            <ul className="menu hidden gap-1 px-1 lg:menu-horizontal">
                <Nav />
            </ul>
            <div className="flex-none lg:hidden">
                <Drawer />
            </div>
            <div className="dropdown dropdown-end flex-none">
                <div tabIndex={0} role="button" className="btn">
                    Theme
                    <svg
                        width="12px"
                        height="12px"
                        className="inline-block size-2 fill-current opacity-60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                    >
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] mt-1 w-52 rounded-box bg-base-300 p-2 shadow-2xl"
                >
                    {['light', 'dark', 'dim', 'bumblebee'].map((theme, i) => (
                        <li key={theme}>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                                aria-label={theme}
                                value={theme}
                            />
                        </li>
                    ))}
                </ul>
            </div>
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
}

const Footer = () => {
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
}

const ErrorPage = () => {
    return (
        <div className="grid h-screen place-content-center px-4">
            <div className="space-y-7 text-center">
                <h1 className="text-9xl font-black">404</h1>
                <p className="text-2xl font-bold tracking-tight sm:text-4xl">
                    Page Not Found!
                </p>
                <p className="text-base-content">We can't find that page.</p>
                <button className="btn btn-primary">
                    <Link to={'/'} className="">
                        Go Back Home
                    </Link>
                </button>
            </div>
        </div>
    )
}

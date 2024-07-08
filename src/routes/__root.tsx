import {
    createRootRoute,
    Link,
    Outlet,
    useRouterState,
} from '@tanstack/react-router'
import kriptPharmaLogo from '../assets/company-logo.svg'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'
import ThemeProvider from '../context/theme'
import { ErrorPage } from '../view/PageNotFount'
import { Alert } from '../components/Alert'
import { Footer } from '../components/Footer'
import clsx from 'clsx'

export const Route = createRootRoute({
    component: () => (
        <div className="selection:bg-secondary selection:text-secondary-content">
            <ThemeProvider>
                <Alert
                    alertFor="wip"
                    text="This website is a work in progress. Any discrepancy can reported to developer@kriptpharmaceuticals.com"
                />
                <Alert
                    alertFor="pharmaexpo"
                    text="Medi Vietnam PharmaExpo 2024 Saigon Exhibition 1st - 3rd
                    August 2024 Booth No. IP08 Saigon exhibition and convention
                    centre at 799 Mguyeb Van Linh Street, Ho Chi Minah City"
                />

                <Header />

                {/* "px-breath lg:px-breath-lg" is here to globally create breathing room for the content*/}
                {/* The effects of this class can be negated by using the <Breakout/> component */}
                <main className="relative mx-auto mt-8 size-full min-h-svh max-w-12xl px-breath lg:px-breath-lg">
                    <Outlet />
                </main>

                <Footer />
                {import.meta.env.DEV && <TanStackRouterDevtools />}
            </ThemeProvider>
        </div>
    ),
    notFoundComponent: () => <ErrorPage />,
})

const Nav = () => {
    const routerState = useRouterState()
    const currentRoute = routerState.location.pathname
    return (
        <>
            {[
                'Home',
                'About',
                'Product',
                'Equipment',
                'Downloads',
                'Global Presence',
                'Gallery',
                'Exhibition',
                'Contact',
            ].map((path) => (
                <li key={path}>
                    <Link
                        to={'/' + path.replace(' ', '')}
                        className={clsx(
                            currentRoute.slice(1).toLowerCase() ===
                                path.toLowerCase() && 'active font-bold'
                        )}
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
        <div className="navbar gap-2 bg-base-100 py-8">
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost btn-sm border text-lg md:btn-md sm:text-xl"
                >
                    <img
                        src={kriptPharmaLogo}
                        alt="Kript Pharmaceuticals logo"
                        className="inline-block h-auto w-full"
                    />
                </Link>
            </div>
            <ul className="menu hidden gap-1 lg:menu-horizontal">
                <Nav />
            </ul>
            <div className="flex-none lg:hidden">
                <Drawer />
            </div>
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

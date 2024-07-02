import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import kriptPharmaLogo from '../assets/company-logo.svg'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'
import ThemeProvider from '../context/theme'
import { ErrorPage } from '../view/PageNotFount'
import { Alert } from '../components/Alert'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
    component: () => (
        <>
            <ThemeProvider>
                <Header />
                <Alert alertFor="pharmaexpo">
                    Medivietnam pharmaexpo 2024 Saigon Exhibition 1st - 3rd
                    August 2024 Booth No. IP08
                </Alert>

                {/* "px-breath lg:px-breath-lg" is here to globally create breathing room for the content*/}
                {/* The effects of this class can be negated by using the <Breakout/> component */}
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

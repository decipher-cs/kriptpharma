import { createRootRoute, Outlet, ScrollRestoration, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ThemeProvider from '../context/theme'
import { ErrorPage } from '../view/PageNotFount'
import { Alert } from '../components/Alert'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Route = createRootRoute({
    component: () => <Root />,
    notFoundComponent: () => <ErrorPage />,
})

function Root() {
    const { isLoading } = useRouterState()

    return (
        <div className="selection:bg-secondary selection:text-secondary-content">
            <ScrollRestoration />
            <ThemeProvider>
                <Header />

                {/* "px-breath lg:px-breath-lg" is here to globally create breathing room for the content*/}
                {/* The effects of this class can be negated by using the <Breakout/> component */}
                <main className="relative mx-auto mt-8 size-full min-h-svh max-w-12xl px-breath lg:px-breath-lg">
                    {isLoading ? (
                        <span className="loading loading-spinner loading-lg absolute left-1/2 bg-primary" />
                    ) : (
                        <Outlet />
                    )}
                </main>

                <Alert alertFor="pharmaexpo" />

                <Footer />
                {import.meta.env.DEV && <TanStackRouterDevtools />}
            </ThemeProvider>
        </div>
    )
}

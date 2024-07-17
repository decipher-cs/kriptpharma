import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ThemeProvider from '../context/theme'
import { ErrorPage } from '../view/PageNotFount'
import { Alert } from '../components/Alert'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Route = createRootRoute({
    component: () => (
        <div className="selection:bg-secondary selection:text-secondary-content">
            <ScrollRestoration />
            <ThemeProvider>
                <Header />

                {/* "px-breath lg:px-breath-lg" is here to globally create breathing room for the content*/}
                {/* The effects of this class can be negated by using the <Breakout/> component */}
                <main className="relative mx-auto mt-8 size-full min-h-svh max-w-12xl px-breath lg:px-breath-lg">
                    <Outlet />
                </main>

                <aside className="fixed bottom-0 z-10 w-full bg-red-500">
                    <Alert
                        alertFor="pharmaexpo"
                        text="Medi Vietnam PharmaExpo 2024 Saigon Exhibition 1st - 3rd
                    August 2024 Booth No. IP08 Saigon exhibition and convention
                    centre at 799 Mguyeb Van Linh Street, Ho Chi Minah City"
                    />
                </aside>

                <Footer />
                {import.meta.env.DEV && <TanStackRouterDevtools />}
            </ThemeProvider>
        </div>
    ),
    notFoundComponent: () => <ErrorPage />,
})

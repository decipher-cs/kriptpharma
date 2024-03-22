import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/*')({
    component: () => <ErrorPage />,
})

const ErrorPage = () => {
    return (
        <div className="grid h-screen place-content-center px-4">
            <div className="text-center space-y-7">
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

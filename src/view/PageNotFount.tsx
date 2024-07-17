import { Link } from "@tanstack/react-router"

export const ErrorPage = () => {
    return (
        <div className="grid place-content-center px-4">
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

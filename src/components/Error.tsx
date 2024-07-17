import { Link } from '@tanstack/react-router'

export default function CustomError() {
    return (
        <div className="grid place-content-center px-4">
            <div className="space-y-7 text-center">
                <h1 className="text-9xl font-black">Error!</h1>
                <p className="text-2xl font-bold capitalize tracking-tight sm:text-4xl">
                    Something went wrong
                </p>
                <p className="text-base-content">You can try the following</p>
                <button className="btn btn-primary mr-3" onClick={() => window.location.reload()}>
                    Refresh Page
                </button>
                <Link to={'/contact'} className="btn btn-outline border-primary">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

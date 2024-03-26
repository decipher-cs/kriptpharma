import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
    component: () => <About />,
})

const About = () => {
    return (
        <section className="grid justify-center gap-10">
            <h1 className="bg-clip-text text-3xl font-extrabold sm:text-5xl">
                About Us
            </h1>

            <p className="max-w-4xl text-xl/relaxed">
                Top Indian Pharmaceuticals Company. Kript Pharmaceuticals is ISO
                certified with self owned manufacturing units in excise-free
                zones. The company has dedicated itself to bring fine quality
                drug formulations catering to wider demands. Being
                patient-centric in our approach, we have always kept the needs
                of consumer’s priority. This has enabled us to meet demands
                across nation. We welcome people across India to become our
                Business associate. It is our proud earning that we’re a family
                of 200+. Currently, we look forward to expand greater healthcare
                facilities in uncovered locations. Our associates have been
                enjoying the best advantages by owning over 350+ products that
                cover multiple segments of nutraceuticals, neurology, derma,
                ophthalmic, cardiac diabetic etc.
            </p>

            <Link className="btn btn-info" to="/contact">
                Get In Touch With Us
            </Link>
        </section>
    )
}

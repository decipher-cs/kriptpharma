import { createLazyFileRoute, Link } from '@tanstack/react-router'
const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

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
            <article className="grid">
                {[
                    {
                        title: 'Our Vision',
                        description:
                            'To uphold our social responsibilities of delivering highest standard healthcare services.',
                    },
                    {
                        title: 'Our Value',
                        description:
                            'Our Business Values with clients are as simple as LIFELONG “Business Relations “,',
                    },
                    {
                        title: 'Our Mission',
                        description:
                            'We at Kript Pharmaceuticals believes that complete customer satisfaction is the key to expand business everywhere.',
                    },
                ].map((data, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-3 grid-rows-1 border-2 "
                    >
                        <h4 className={'text-2xl font-bold'}>{data.title}</h4>
                        <p className="text-lg leading-relaxed">
                            {data.description}
                        </p>
                        <div className='object-cover h-min'>
                            <img
                                src={imagePaths[i]}
                                className={
                                    '' + (i === 1 ? ' -order-1' : '')
                                }
                            />
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}

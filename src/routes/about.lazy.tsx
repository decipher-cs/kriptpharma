import { createLazyFileRoute } from '@tanstack/react-router'
const stampImport = import.meta.glob('../assets/stamps/*.*', {
    eager: true,
})

const stamps = Object.values(stampImport).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        const path = module.default
        if (typeof path === 'string') {
            const parts = path.split('/')
            const filename = parts[parts.length - 1]
                .replace('.webp', '')
                .replace(/%20/g, ' ')
            return { path, filename }
        }
    }
})

export const Route = createLazyFileRoute('/about')({
    component: () => <AboutUs />,
})

const AboutUs = () => {
    return (
        <section className="mx-auto max-w-screen-xl space-y-8">
            <article
                className="mx-auto grid items-center justify-center gap-16"
                id="about-us"
            >
                <h2 className="text-3xl font-bold lg:text-5xl">About Us</h2>
                <p className="max-w-prose text-lg/relaxed sm:text-xl/loose">
                    A promise for healthy life Kript pharmaceuticals pvt Ltd was
                    established with the motive of adding values to the million
                    of lives through its best quality products , we are here for
                    the people as we serve in the persuit of their healthy lives
                    . We nurture innovation , offers excellent quality and
                    always stretches to inspire confidence in our customer . Our
                    primary objective is to proved high end medical products. At
                    kript pharmaceuticals, we believe in weaving business ethics
                    in all our endeavours and continually updating and upgrading
                    to deliver a uniform quality that surpasses industry
                    benchmarks .
                    <br /> <br />
                    Kript Pharmaceuticals Private Limited is a Registered Indian
                    Pharma Company engaged in the manufacture and marketing of
                    Pharmaceutical formulations. Located in the largest Pharma
                    Hub of Asia, the Company has made a name for itself for its
                    quality and range of products . Supplying not just
                    pharmaceutical, nutraceuticals but also marking their
                    presence into hospital furniture and equipment services . We
                    are equipping multiple hospitals from scratch with our
                    equipment across the globe . Kript pharmaceuticals is a fast
                    expanding Pharma organization having over 400+ registered
                    brands, and is steadily working to make a presence across
                    the Globe.
                </p>
            </article>

            <section className="space-y-8 text-center">

                <h2 className="text-center text-2xl sm:text-5xl">
                    Certificates
                </h2>

                <section className="mx-auto grid gap-10">
                    <article className="mx-auto flex flex-wrap justify-center gap-10">
                        {stamps.map((stamp) => {
                            if (stamp)
                                return (
                                    <img
                                        src={stamp.path}
                                        key={stamp.path}
                                        className={`h-28 last:max-w-80 md:h-40 invert`}
                                        alt={stamp.filename}
                                    />
                                )
                        })}
                    </article>
                </section>
            </section>
        </section>
    )
}

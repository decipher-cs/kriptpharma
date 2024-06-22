import { createLazyFileRoute } from '@tanstack/react-router'
import { memo } from 'react'
import furnitureCatalogue from '../assets/furniture-catalogue.pdf'

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const backgroundImagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

export const Route = createLazyFileRoute('/equipment')({
    component: () => <Equipment />,
})

const Equipment = () => {
    return (
        <div className="-mt-6 space-y-36">
            <section className="space-y-12" id="Category">
                <h2 className="text-center text-3xl font-bold lg:text-5xl">
                    Categories
                </h2>
                <Mason />
            </section>
        </div>
    )
}

const Mason = memo(() => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
                'Hospital Beds',
                'Ward Equipment',
                'Patient Transfer Trolley',
                'OT Table & Modular OT',
                'Wheelchairs',
                'Delivery Beds',
            ].map((data, i) => (
                <a
                    href={furnitureCatalogue}
                    target="_blank"
                    key={data}
                    className="relative grid min-h-32 place-content-center rounded-lg px-3 transition odd:row-span-2 even:row-span-3 hover:scale-110 sm:min-h-40"
                >
                    <img
                        className="absolute inset-0 size-full rounded-lg object-cover object-center brightness-50"
                        src={backgroundImagePaths[i]}
                        alt=""
                    />
                    <h3 className="z-0 text-center text-xl font-bold text-neutral-100 sm:text-2xl">
                        {data}
                    </h3>
                </a>
            ))}
        </div>
    )
})

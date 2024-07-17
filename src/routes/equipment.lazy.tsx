import { createLazyFileRoute } from '@tanstack/react-router'
import { memo, useState } from 'react'
import furnitureCatalogue from '../assets/downloadable-pdf/furniture-catalogue.pdf'
import clsx from 'clsx'

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
    component: memo(() => <Equipment />),
})

const Equipment = () => {
    return (
        <div className="space-y-36">
            <section className="space-y-12" id="Category">
                <Mason />
            </section>
        </div>
    )
}

const equipments = [
    {
        name: 'Hospital Bed',
        images: Object.values(
            import.meta.glob('../assets/equipment/hospital-beds/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'Hospital Bed accessories',
        images: Object.values(
            import.meta.glob('../assets/equipment/hospital-bed-accessories/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'Delivery Bed',
        images: Object.values(
            import.meta.glob('../assets/equipment/delivery-beds/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'Dialsysis Bed',
        images: Object.values(
            import.meta.glob('../assets/equipment/dialsysis-bed/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'Examination Table',
        images: Object.values(
            import.meta.glob('../assets/equipment/examination-tables/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'Modular OT',
        images: Object.values(
            import.meta.glob('../assets/equipment/modular-ot/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'OT Table',
        images: Object.values(
            import.meta.glob('../assets/equipment/ot-tables/*.{jpg,png,webp,jpeg}', { eager: true })
        ),
    },
    {
        name: 'patient transfer trolley',
        images: Object.values(
            import.meta.glob(
                '../assets/equipment/patient-transfer-trolleys/*.{jpg,png,webp,jpeg}',
                { eager: true }
            )
        ),
    },
    {
        name: 'ward equipment',
        images: Object.values(
            import.meta.glob('../assets/equipment/ward-equipments/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'wheelchair',
        images: Object.values(
            import.meta.glob('../assets/equipment/wheelchairs/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
    {
        name: 'ward ot opd equipment',
        images: Object.values(
            import.meta.glob('../assets/equipment/ward-ot-opd-equpment/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
]

const Mason = memo(() => {
    const [selectedEquipment, setSelectedEquipment] = useState<(typeof equipments)[number]>(
        equipments[0]
    )

    return (
        <section>
            <div role="tablist" className="tabs tabs-lifted">
                {equipments.map((equipment) => (
                    <a
                        key={equipment.name}
                        className={clsx(
                            'tab truncate',
                            selectedEquipment.name === equipment.name && 'tab-active'
                        )}
                        onClick={() => setSelectedEquipment(equipment)}
                    >
                        {equipment.name}
                    </a>
                ))}

                {selectedEquipment.images.map((val) => {
                    if (
                        typeof val === 'object' &&
                        val &&
                        'default' in val &&
                        typeof val.default === 'string'
                    ) {
                        return <img src={val.default} className="inline-block" key={val.default} />
                    } else console.log(val)
                    return null
                })}
            </div>
        </section>
    )
})

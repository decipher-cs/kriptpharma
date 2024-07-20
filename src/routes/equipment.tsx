import { createFileRoute } from '@tanstack/react-router'
import { memo, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { PiHandSwipeRight, PiSkipBack, PiSkipForward, PiX } from 'react-icons/pi'
import Breakout from '../components/Breakout'

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const backgroundImagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

type EquipmentSearchParams = { equipmentName: (typeof equipments)[number]['name'] | null }

export const Route = createFileRoute('/equipment')({
    component: memo(() => <Equipment />),
    validateSearch: (search: Record<string, unknown>): EquipmentSearchParams => {
        const { equipmentName } = search
        return { equipmentName: equipments.find((v) => v.name === equipmentName)?.name ?? null }
    },
})

const Equipment = memo(() => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const { equipmentName: queriedEquipmentName } = Route.useSearch()

    const [selectedEquipment, setSelectedEquipment] = useState<(typeof equipments)[number]>(
        equipments[equipments.length - 2]
    )

    useEffect(() => {
        if (!queriedEquipmentName) return

        setSelectedEquipment(
            equipments.find((val) => val.name === queriedEquipmentName) ?? equipments[0]
        )

        dialogRef.current?.showModal()
    }, [queriedEquipmentName])

    const slider = useRef<Swiper | null>(null)

    useEffect(() => {
        slider.current = new Swiper('.swiper-equipment', {
            freeMode: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            autoHeight: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            centeredSlidesBounds: true,
        })

        return () => {
            slider.current?.destroy()
        }
    }, [selectedEquipment.name, selectedEquipment.images.length])

    return (
        <section className="">
            <div
                className={clsx(
                    'grid auto-rows-[10rem] gap-3',
                    'md:grid-flow-dense md:grid-cols-[repeat(auto-fit,10rem)] md:justify-center ',
                    'md:[&>*:nth-child(2n)]:col-span-2',
                    'md:[&>*:nth-child(2n+1)]:col-span-2 md:[&>*:nth-child(2n+1)]:row-span-2'
                )}
            >
                {equipments.map((equipment, i) => (
                    <button
                        className="btn relative size-full overflow-hidden p-0"
                        key={equipment.name}
                        onClick={() => {
                            setSelectedEquipment(equipment)
                            const el = dialogRef.current
                            el instanceof HTMLDialogElement && el.showModal()
                        }}
                    >
                        <img
                            loading="lazy"
                            src={backgroundImagePaths[i]}
                            alt=""
                            className="absolute inset-0 size-full object-cover brightness-50"
                        />
                        <h2 className="absolute bottom-0 w-full bg-primary p-3  text-center text-lg font-bold capitalize text-primary-content">
                            {equipment.name}
                        </h2>
                    </button>
                ))}
            </div>

            <dialog ref={dialogRef} className="modal backdrop-blur-lg">
                <form method="dialog">
                    <button
                        className="btn btn-circle absolute right-2 top-2 z-50"
                        aria-label="close dialog"
                    >
                        <PiX size={30} />
                    </button>
                </form>

                <div className="absolute bottom-12 z-50 grid w-full justify-center gap-3 text-neutral-500 sm:hidden">
                    <PiHandSwipeRight size={50} />
                    swipe
                </div>

                <article className="flex h-svh w-screen gap-10 bg-base-200">
                    <div
                        className="btn h-full rounded-none bg-white max-sm:hidden"
                        onClick={() => slider.current?.slidePrev()}
                    >
                        <PiSkipBack size={30} />
                    </div>

                    <div className="swiper swiper-equipment select-none hover:cursor-grab">
                        <div className="swiper-wrapper">
                            {selectedEquipment.images.map((val) => {
                                if (
                                    typeof val === 'object' &&
                                    val &&
                                    'default' in val &&
                                    typeof val.default === 'string'
                                ) {
                                    return (
                                        <a
                                            className="swiper-slide"
                                            href={val.default}
                                            aria-label={
                                                'detailed imaged of ' + selectedEquipment.name
                                            }
                                            target="_blank"
                                        >
                                            <img
                                                loading="lazy"
                                                src={val.default}
                                                className="inline-block size-full object-contain"
                                                key={val.default}
                                            />
                                        </a>
                                    )
                                } else console.log(val)
                                return null
                            })}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                    <div
                        className="btn h-full rounded-none bg-white max-sm:hidden"
                        onClick={() => slider.current?.slideNext()}
                    >
                        <PiSkipForward size={30} />
                    </div>
                </article>
            </dialog>
        </section>
    )
})

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
        name: 'ward ot opd equipment' as const,
        images: Object.values(
            import.meta.glob('../assets/equipment/ward-ot-opd-equpment/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
] as const

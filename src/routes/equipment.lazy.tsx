import { createLazyFileRoute } from '@tanstack/react-router'
import { memo, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { PiSkipBack, PiSkipForward } from 'react-icons/pi'
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

export const Route = createLazyFileRoute('/equipment')({
    component: memo(() => <Equipment />),
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
        name: 'ward ot opd equipment',
        images: Object.values(
            import.meta.glob('../assets/equipment/ward-ot-opd-equpment/*.{jpg,png,webp,jpeg}', {
                eager: true,
            })
        ),
    },
]

const Equipment = memo(() => {
    const [selectedEquipment, setSelectedEquipment] = useState<(typeof equipments)[number]>(
        equipments[0]
    )

    const slider = useRef<Swiper | null>(null)

    const sliderThumbnail = useRef<Swiper | null>(null)

    const equipmentImageContainer = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        sliderThumbnail.current = new Swiper('.swiper-thumbnail', {
            spaceBetween: 10,
            slidesPerView: Math.ceil(selectedEquipment.images.length / 3),
            freeMode: true,
            watchSlidesProgress: true,
        })

        slider.current = new Swiper('.swiper-equipment', {
            freeMode: true,
            slidesPerView: selectedEquipment.images.length / 3 < 2 ? 1 : 2,
            spaceBetween: 30,
            centeredSlides: true,
            thumbs: {
                swiper: sliderThumbnail.current,
            },
        })

        return () => {
            slider.current?.destroy()
            sliderThumbnail.current?.destroy()
        }
    }, [selectedEquipment.name, selectedEquipment.images.length])

    return (
        <section className="space-y-40">
            <div
                className={clsx(
                    'grid grid-flow-dense auto-rows-[10rem] grid-cols-[repeat(auto-fit,10rem)] justify-around gap-3',
                    '[&>*:nth-child(2n)]:col-span-2',
                    '[&>*:nth-child(2n+1)]:col-span-2 [&>*:nth-child(2n+1)]:row-span-2'
                )}
            >
                {equipments.map((equipment, i) => (
                    <button
                        className="btn relative size-full overflow-hidden p-0"
                        key={equipment.name}
                        onClick={() => {
                            setSelectedEquipment(equipment)
                            equipmentImageContainer.current?.scrollIntoView()
                        }}
                    >
                        <img
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

            <Breakout className="grid gap-8 bg-base-200 py-20">
                <div className="flex w-full">
                    <div
                        className="btn btn-square h-full bg-white"
                        onClick={() => slider.current?.slidePrev()}
                    >
                        <PiSkipBack size={30} />
                    </div>

                    <div
                        className="swiper swiper-equipment hover:cursor-grab"
                        ref={equipmentImageContainer}
                    >
                        <div className="swiper-wrapper">
                            {selectedEquipment.images.map((val) => {
                                if (
                                    typeof val === 'object' &&
                                    val &&
                                    'default' in val &&
                                    typeof val.default === 'string'
                                ) {
                                    return (
                                        <img
                                            src={val.default}
                                            className="swiper-slide inline-block"
                                            key={val.default}
                                        />
                                    )
                                } else console.log(val)
                                return null
                            })}
                        </div>
                    </div>

                    <div
                        className="btn btn-square h-full bg-white"
                        onClick={() => slider.current?.slideNext()}
                    >
                        <PiSkipForward size={30} />
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="swiper swiper-thumbnail hover:cursor-pointer" id="images">
                        <div className="swiper-wrapper">
                            {selectedEquipment.images.map((val) => {
                                if (
                                    typeof val === 'object' &&
                                    val &&
                                    'default' in val &&
                                    typeof val.default === 'string'
                                ) {
                                    return (
                                        <img
                                            src={val.default}
                                            className="swiper-slide inline-block opacity-50 [&:is(.swiper-slide-thumb-active)]:opacity-100"
                                            key={val.default}
                                        />
                                    )
                                } else console.log(val)
                                return null
                            })}
                        </div>
                    </div>
                </div>
            </Breakout>
        </section>
    )
})

import injections from '../../assets/featured/injections.webp'
import tablet from '../../assets/featured/tablet.webp'
import icuBed from '../../assets/featured/icu bed.webp'
import otRoom from '../../assets/featured/ot room.webp'
import wheelchair from '../../assets/featured/wheelchair.webp'
import softGel from '../../assets/featured/soft-gel.webp'
import deliveryBed from '../../assets/featured/delivery-bed.webp'
import oitment from '../../assets/featured/oitment.webp'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { screens } from 'tailwindcss/defaultTheme'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useEffect, useRef } from 'react'
import { Link, LinkProps } from '@tanstack/react-router'
import Breakout from '../../components/Breakout'
import { PiSkipBack, PiSkipForward } from 'react-icons/pi'

const featuredProductNames = [
    { name: 'Tablets', img: tablet, href: '/product', search: { searchString: 'tablets' } },

    {
        name: 'Soft-Gel Capsules',
        img: softGel,
        href: '/product',
        search: { searchString: 'soft gel capsules' },
    },

    { name: 'Injection', img: injections, href: '/product', search: { searchString: 'injection' } },

    { name: 'ICU Bed', img: icuBed, href: '/equipment', search: { equipmentName: 'Hospital Bed' } },

    {
        name: 'OT Equipment',
        img: otRoom,
        href: '/equipment',
        search: { equipmentName: 'OT Table' },
    },

    {
        name: 'Wheelchair',
        img: wheelchair,
        href: '/equipment',
        search: { equipmentName: 'wheelchair' },
    },

    { name: 'Ointments', img: oitment, href: '/product', search: { searchString: 'ointments' } },

    {
        name: 'Delivery Bed',
        img: deliveryBed,
        href: '/equipment',
        search: { equipmentName: 'Delivery Bed' },
    },
] satisfies { href: LinkProps['to']; search?: LinkProps['search']; name: string; img: string }[]

export default function FeaturedProducts() {
    const { queryMatches: isScreenLg } = useMediaQuery(`(min-width: ${screens.lg})`)

    const slider = useRef<Swiper | null>(null)
    useEffect(() => {
        slider.current = new Swiper('.swiper-home', {
            slidesPerView: 3,
            breakpoints: {
                [screens.md.replace('px', '')]: {
                    slidesPerView: 4,
                },
            },
            spaceBetween: 25,
            pagination: {
                el: '.swiper-pagination',
            },
            initialSlide: Math.floor(featuredProductNames.length / 2) - 1,
            autoHeight: false,
            autoplay: { pauseOnMouseEnter: true, reverseDirection: false, delay: 2000 },
            loop: false,
            centeredSlides: true,
        })

        return () => {
            slider.current?.destroy()
        }
    }, [isScreenLg])
    return (
        <Breakout
            className="tooltip tooltip-bottom relative flex"
            data-tip={isScreenLg ? 'Auto Scroll Paused While Hovering' : 'Click to view more'}
        >
            <div
                className="btn btn-ghost hidden self-center md:inline-flex"
                onClick={() => slider.current?.slidePrev()}
                data-tip="previous"
            >
                <PiSkipBack size={30} />
            </div>

            <div className="swiper swiper-home hover:cursor-grab">
                <div className="swiper-wrapper select-none py-20">
                    {featuredProductNames.map(
                        ({ name, img, href, search }, i) =>
                            img && (
                                <div className="swiper-slide" key={i}>
                                    <Link
                                        className="flex w-full flex-col justify-between gap-10"
                                        to={href}
                                        search={search}
                                    >
                                        <div className="grow">
                                            <img
                                                loading="lazy"
                                                className="inline-block aspect-square h-auto w-full rounded-full border border-primary object-cover"
                                                src={img}
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="grid basis-1/4 place-content-center truncate text-xs sm:text-lg">
                                            {name.toUpperCase()}
                                        </h4>
                                    </Link>
                                </div>
                            )
                    )}
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div
                className="btn btn-ghost hidden self-center md:inline-flex"
                onClick={() => slider.current?.slideNext()}
            >
                <PiSkipForward size={30} />
            </div>
        </Breakout>
    )
}

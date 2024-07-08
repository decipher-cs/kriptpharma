import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

const modules = import.meta.glob('../assets/gallery/*.*', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

export const Route = createLazyFileRoute('/gallery')({
    component: () => <Gallery />,
})

const Gallery = () => {
    const slider = useRef<Swiper | null>(null)
    useEffect(() => {
        slider.current = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            autoplay: { delay: 2500 },
        })

        return () => {
            slider.current?.destroy()
        }
    }, [])

    return (
        <section className="flex flex-col gap-4">
            <div className="swiper h-[80svh] w-full">
                <div className="swiper-wrapper">
                    {imagePaths.map((path, i) => (
                        <img
                            className="swiper-slide inline-block object-contain"
                            key={i}
                            src={path}
                            // TODO: better alt tag
                            alt=""
                            onMouseOver={() => slider.current?.autoplay.pause()}
                            onMouseLeave={() =>
                                slider.current?.autoplay.resume()
                            }
                        />
                    ))}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>
        </section>
    )
}

import { createLazyFileRoute } from '@tanstack/react-router'
import { PiCheckCircle, PiDotsThreeVertical } from 'react-icons/pi'
import pharmaExpoVietnam from '../assets/gallery/vietnam-pharmaexpo.webp'
import { memo } from 'react'

export const Route = createLazyFileRoute('/exhibition')({
    component: memo(() => (
        <section className="grid justify-center gap-1">
            <h2 className="mb-20 text-center text-5xl">Exhibition</h2>
            <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon">
                {[
                    {
                        time: 'Aug 2024',
                        heading: 'Medi Pharma-Expo, Vietnam ',
                        description:
                            'Saigon exhibition and convention centre at 799 Mguyeb Van Linh Street, Ho Chi Minah City',
                        imageDescription:
                            'pamphlet with info on medi pharma expo. Held between 1st-3rd august 2024 in vietnam.',
                    },
                ].map((data, i) => (
                    <li key={i}>
                        <div className="timeline-middle">
                            <PiCheckCircle size={24} />
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">{data.time}</time>
                            <div className="max-w-prose text-lg font-black">{data.heading}</div>
                            {data.description}
                            <br />
                            <a href={pharmaExpoVietnam} target="_blank">
                                <img
                                    loading="lazy"
                                    alt={data.imageDescription}
                                    src={pharmaExpoVietnam + ''}
                                    className="my-8 inline-block max-h-[70svh] w-auto rounded-xl bg-primary object-contain"
                                />
                            </a>
                        </div>
                        <hr />
                    </li>
                ))}

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <PiDotsThreeVertical size={24} />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">
                            {new Date().toDateString().toString()}
                        </time>
                        <div className="text-lg font-black">More on the way</div>
                        <div className="text-lg ">
                            Tune in at a later date to see more of our endeavours
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </section>
    )),
})

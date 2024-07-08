import { createLazyFileRoute } from '@tanstack/react-router'
import { PiCheckCircle, PiDotsThreeVertical, PiSmiley } from 'react-icons/pi'
import pharmaExpoVietnam from '../assets/gallery/vietnam-pharmaexpo.webp'

export const Route = createLazyFileRoute('/exhibition')({
    component: () => (
        <section className="grid justify-center gap-8">
            <h2 className="text-center text-5xl">Exhibition</h2>
            <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
                {[
                    {
                        time: 'Aug 2024',
                        heading: 'Medi Vietnam PharmaExpo',
                        description:
                            'Saigon exhibition and convention centre at 799 Mguyeb Van Linh Street, Ho Chi Minah City',
                    },
                ].map((data, i) => (
                    <li key={i}>
                        <hr />
                        <div className="timeline-middle">
                            <PiCheckCircle size={24} />
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">
                                {data.time}
                            </time>
                            <div className="text-lg font-black">
                                {data.heading}
                            </div>
                            {data.description}
                            <a href={pharmaExpoVietnam} target="_blank">
                                <img src={pharmaExpoVietnam} />
                            </a>
                        </div>
                        <hr />
                    </li>
                ))}
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <PiDotsThreeVertical size={37} />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">
                            {new Date().toDateString().toString()}
                        </time>
                        <div className="text-lg font-black">
                            More on the way
                        </div>
                        <div className="text-lg ">
                            Tune in at a later date to see more of our
                            endeavours
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </section>
    ),
})

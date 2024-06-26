import { createLazyFileRoute } from '@tanstack/react-router'
import { PiCheckCircle, PiDotsThreeVertical, PiSmiley } from 'react-icons/pi'

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
                ].map((data) => (
                    <li>
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
                        </div>
                        <hr />
                    </li>
                ))}
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <PiDotsThreeVertical size={37} />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="flex items-center gap-3 font-mono italic">
                            More on the way <PiSmiley size={20} />
                        </time>
                    </div>
                </li>
            </ul>
        </section>
    ),
})

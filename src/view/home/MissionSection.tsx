import { PiEye, PiMegaphone, PiRoadHorizon } from 'react-icons/pi'
import Breakout from '../../components/Breakout'

export const MissionSection = () => {
    return (
        <Breakout className="justify-self-stretch">
            <article
                className="mx-auto grid max-w-screen-xl auto-rows-fr items-stretch justify-items-center gap-5 px-breath py-10 lg:grid-cols-3"
                id="vision"
            >
                {[
                    {
                        title: 'Our Vision',
                        logo: <PiEye className="size-8" />,
                        description: (
                            <>
                                <li>
                                    To be one of the reliable, innovative, customer oriented and
                                    most admired Pharmaceutical Company in the global arena.
                                </li>
                                <li>
                                    To continually create value, bring pride to our customers and
                                    partners at large.
                                </li>

                                <li>
                                    To provide quality products with concern to Safety for human
                                    health.
                                </li>
                            </>
                        ),
                    },
                    {
                        title: 'Our Value',
                        logo: <PiRoadHorizon className="size-8" />,
                        description: (
                            <>
                                <li>
                                    We are committed to offering you a wide variety of quality
                                    pharmaceutical preparations of various segments.
                                </li>

                                <li>
                                    We provide all desired documentation for your regulatory
                                    requirements.
                                </li>

                                <li>
                                    Our commitment includes ensuring that both the pharmaceutical
                                    preparations and the documentation meet your needs.
                                </li>
                            </>
                        ),
                    },
                    {
                        title: 'Our Mission',
                        logo: <PiMegaphone className="size-8" />,
                        description: (
                            <>
                                <li>
                                    Manufacturing quality products with concern for safety,
                                    environment and health.
                                </li>
                                <li>
                                    Following best management practices and build success with
                                    excellence.
                                </li>
                                <li>
                                    To strive ceaselessly with a commitment towards Customer
                                    satisfaction.
                                </li>
                            </>
                        ),
                    },
                ].map((data, i) => (
                    <div
                        className="group max-w-prose rounded-lg border border-neutral-300 bg-base-100 shadow-md transition-all"
                        key={i}
                    >
                        <div className="grid h-full content-center space-y-5 p-8 lg:content-start">
                            {data.logo}
                            <h2 className="text-2xl font-bold">{data.title}</h2>
                            <div className="grid list-inside list-none gap-6 text-lg/normal">
                                {data.description}
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </Breakout>
    )
}

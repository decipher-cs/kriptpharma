import { PiFactoryThin, PiHandshakeThin, PiUsersThreeThin } from 'react-icons/pi'
import clsx from 'clsx'
import Breakout from '../../components/Breakout'

export const CompanyStats = () => {
    return (
        <Breakout className="flex flex-col gap-8 bg-primary px-breath-md py-5 text-primary-content lg:flex-row">
            {[
                { icon: <PiUsersThreeThin size={65} />, stat: '100+', title: 'Current Employees' },
                {
                    icon: <PiFactoryThin size={65} />,
                    stat: '3+',
                    title: 'Invested Large Pharmaceeutical Manufacturing Company',
                },
                { icon: <PiHandshakeThin size={65} />, stat: '200+', title: 'Partners' },
            ].map((item, i) => (
                <div
                    key={i}
                    className={clsx(
                        'flex basis-1/3 flex-col items-center gap-2 py-3 text-center',
                        'even:px-5 even:max-lg:border-y even:lg:border-x'
                    )}
                >
                    <span> {item.icon} </span>
                    <em className="text-6xl font-bold">{item.stat}</em>
                    <span>{item.title}</span>
                </div>
            ))}
        </Breakout>
    )
}

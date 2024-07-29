import { PiCertificateThin, PiPencilRulerThin, PiTruckThin } from 'react-icons/pi'

export const Specialties = () => {
    return (
        <div className="grid gap-10 lg:grid-cols-3">
            {[
                { icon: <PiTruckThin size={'100%'} />, title: 'Pharmaceuticals Export & Import' },
                { icon: <PiPencilRulerThin size={'100%'} />, title: 'Research & Development' },
                {
                    icon: <PiCertificateThin size={'100%'} />,
                    title: 'WHO-GMP Registered',
                },
            ].map((item, i) => (
                <div key={i} className="grid place-content-center place-items-center gap-4">
                    <span className="flex aspect-square max-w-32 place-content-center place-items-center rounded-full bg-primary p-4 text-primary-content">
                        {item.icon}
                    </span>
                    <h6> {item.title} </h6>
                </div>
            ))}
        </div>
    )
}

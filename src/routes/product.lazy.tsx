import { createLazyFileRoute } from '@tanstack/react-router'
import medicineData from '../assets/medicine.json'

export const Route = createLazyFileRoute('/product')({
    component: () => <Product />,
})

const category = [
    'injectables',
    'infusion',
    'powder',
    'ointments',
    'syrup',
    'softgel',
    'capsules',
    'tablets',
] as const

const Item = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

const Product = () => {
    return (
        <>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Packaging</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicineData.map((data) => (
                            <tr key={data.id} className="hover">
                                <th>{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.packaging}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

import { TransformedProductData } from '../types'

export default function ProductTable(props: { products: TransformedProductData }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra table-pin-rows">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Composition</th>
                        <th>Form</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((data, i) => (
                        <tr key={i} className="hover capitalize">
                            <th className="font-normal">{i + 1}</th>
                            <td>{data.composition}</td>
                            <td>{data.form}</td>
                            <td>{data.category}</td>
                        </tr>
                    ))}

                    {/* // ) : ( */}
                    {/* //     <tr> */}
                    {/* //         {Array(4) */}
                    {/* //             .fill('') */}
                    {/* //             .map(() => ( */}
                    {/* //                 <th> */}
                    {/* //                     <span className="loading loading-dots loading-md bg-neutral-500"></span> */}
                    {/* //                 </th> */}
                    {/* //             ))} */}
                    {/* //     </tr> */}
                    {/* //)} */}
                </tbody>
            </table>
        </div>
    )
}

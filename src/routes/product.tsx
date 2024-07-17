import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Fuse from 'fuse.js'
import { useCallback, useEffect, useRef, useState } from 'react'
import Breakout from '../components/Breakout'
import { ApiProductData, ProductDataField, TransformedProductData } from '../types'
import { PiArrowDown, PiMagnifyingGlass } from 'react-icons/pi'
import useDebounce from '../hooks/useDebounce'
import clsx from 'clsx'
import fallbackData from '../assets/fallbackProductData.json'
import { twMerge } from 'tailwind-merge'
import CustomError from '../components/Error'

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

type ProductSearch = {
    searchString?: string
    categoryFilter?: string[]
}

type CategoryVisibility = { [key: string]: boolean }

const fetchData = async () => {
    return fallbackData
    // try {
    //     const URL =
    //         'https://cdn.contentful.com/spaces/' +
    //         import.meta.env.VITE_CMS_SPACE +
    //         '/entries?&limit=1000'
    //
    //     const res = await fetch(URL, {
    //         headers: {
    //             Authorization: 'Bearer ' + import.meta.env.VITE_CMS_API_KEY,
    //         },
    //     })
    //
    //     if (!res.ok) throw new Error('Unknown error')
    //
    //     return (await res.json()) as ApiProductData
    // } catch (error) {
    //     return fallbackData
    // }
}

const TransformApiData = (data: ApiProductData): TransformedProductData => {
    /*
     * Take the raw data from CMS and map it
     * into data usable by the client
     * */

    const references = new Object() as { [key: string]: string }

    data.includes.Entry.forEach((ref) => {
        const {
            sys: { id },
            fields: { name, type },
        } = ref

        if (name) references[id] = name
        if (type) references[id] = type
    })

    const transformedData = data.items.map((item) => {
        const {
            fields: {
                form: {
                    sys: { id: formId },
                },
                category: {
                    sys: { id: categoryId },
                },
                composition,
            },
        } = item
        return {
            form: references[formId],
            category: references[categoryId],
            composition,
        }
    })

    return transformedData
}

export const Route = createFileRoute('/product')({
    component: () => <Product />,

    /*
     * TODO:
     * Waiting for PR to merge which fixes bug with serial data
     * fetching before adding the beforeLoad method
     * https://github.com/TanStack/router/pull/1907
     * */
    // beforeLoad: async () => {
    //     return { data: fallbackData as ApiProductData }
    // },
    //
    // loader: async (ctx) => {
    //     return ctx?.context?.data ?? fallbackData
    // },

    errorComponent: () => <CustomError />,

    validateSearch: (search: Record<string, unknown>): ProductSearch => {
        const { searchString, categoryFilter } = search
        return {
            categoryFilter: Array.isArray(categoryFilter) ? categoryFilter : undefined,
            searchString: typeof searchString === 'string' ? searchString : undefined,
        }
    },
})

const Product = () => {
    /*
     * TODO:
     * Waiting for PR to merge which fixes bug with serial data
     * fetching before adding the beforeLoad method
     * https://github.com/TanStack/router/pull/1907
     * */
    // const medicineList = Route.useLoaderData({
    //     select: (data) => {
    //         if (!data) return []
    // })

    const [medicineList, setMedicineList] = useState<TransformedProductData>([])

    const [categoryVisibility, setCategoryVisibility] = useState<CategoryVisibility>({})

    const navigate = useNavigate({ from: Route.fullPath })

    const changeUrlParams = useCallback(
        (param: keyof ProductSearch, newValue: ProductSearch[keyof ProductSearch]) => {
            navigate({ search: (prev) => ({ ...prev, [param]: newValue }) })
        },
        [navigate]
    )

    const handleCheckboxChange = (category: string, checked: boolean) => {
        const newValue = { ...categoryVisibility }

        newValue[category] = checked

        setCategoryVisibility(newValue)

        changeUrlParams(
            'categoryFilter',
            Object.keys(newValue).filter((v) => newValue[v])
        )
    }

    const { searchString: urlSearchString, categoryFilter: urlCategoryFilter } = Route.useSearch()

    const [searchString, setSearchString] = useState(urlSearchString ?? '')

    const [maxRows, setMaxRows] = useState(12)

    const debounceValue = useDebounce(searchString, 100)

    useEffect(() => {
        fetchData()
            // .then((data) => TransformApiData(data))
            .then((data) => {
                setMedicineList(data)

                const obj: CategoryVisibility = {}
                data.forEach(({ category }) => {
                    obj[category] =
                        urlCategoryFilter === undefined || urlCategoryFilter.includes(category)
                })
                setCategoryVisibility(obj)
            })
    }, [urlCategoryFilter])

    const fuse = useRef<Fuse<(typeof medicineList)[number]> | null>(null)

    const filteredMedicineList =
        fuse.current && debounceValue.length > 1
            ? fuse.current.search(debounceValue).map((f) => f.item)
            : medicineList

    useEffect(() => {
        fuse.current = new Fuse(medicineList, {
            keys: ['category', 'composition', 'form'] satisfies ProductDataField[],
        })
    }, [medicineList])

    return (
        <section className="space-y-10">
            <Breakout>
                <article className="mx-auto space-y-10">
                    <section className="flex justify-center gap-3 max-md:flex-wrap">
                        <label className="input input-md input-bordered flex basis-1/2 items-center gap-2 sm:justify-self-start">
                            <span className="sr-only">Search the table</span>
                            <input
                                type="text"
                                placeholder="Search the table..."
                                className="w-full placeholder:italic"
                                value={searchString}
                                maxLength={50}
                                onChange={(e) => {
                                    setSearchString(e.target.value)
                                }}
                            />
                            <PiMagnifyingGlass />
                        </label>

                        <button
                            className="btn basis-1/2 capitalize"
                            onClick={() => {
                                const modal = document.getElementById('filter-modal')
                                if (modal instanceof HTMLDialogElement) modal.showModal()
                            }}
                        >
                            Filter by category
                        </button>

                        <dialog id="filter-modal" className="modal">
                            <div className="modal-box w-full">
                                <h3 className="px-5 text-lg font-bold">Categories</h3>

                                {/* TODO: list container should auto focus on open */}
                                <div
                                    className="mt-3 max-h-[60svh] overflow-y-scroll px-3"
                                    autoFocus={true}
                                >
                                    {Object.entries(categoryVisibility).map(
                                        ([category, isChecked], i) => (
                                            <div className="form-control" key={i}>
                                                <label className="label cursor-pointer  rounded-lg px-2 hover:bg-base-200">
                                                    <span className="label-text capitalize">
                                                        {category}
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        className="checkbox"
                                                        value={category}
                                                        onChange={(e) => {
                                                            handleCheckboxChange(
                                                                category,
                                                                e.target.checked
                                                            )
                                                        }}
                                                        checked={isChecked}
                                                    />
                                                </label>
                                            </div>
                                        )
                                    )}
                                </div>

                                <div className="modal-action">
                                    <button
                                        onClick={() => {
                                            setCategoryVisibility((p) =>
                                                Object.fromEntries(
                                                    Object.keys(p).map((key) => [key, true])
                                                )
                                            )
                                            changeUrlParams(
                                                'categoryFilter',
                                                Object.keys(categoryVisibility)
                                            )
                                        }}
                                        className="btn"
                                    >
                                        Select All
                                    </button>

                                    <button
                                        onClick={() => {
                                            setCategoryVisibility((p) =>
                                                Object.fromEntries(
                                                    Object.keys(p).map((key) => [key, false])
                                                )
                                            )

                                            changeUrlParams('categoryFilter', [])
                                        }}
                                        className="btn"
                                    >
                                        Clear All
                                    </button>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>

                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </section>

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
                                {filteredMedicineList
                                    .filter(({ category }) => categoryVisibility[category])
                                    .slice(0, maxRows)
                                    .map((data, i) => (
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

                    <div
                        className={clsx(
                            'join flex *:btn-ghost *:basis-1/3 *:border-neutral-300'
                            // medicineListFetchStatus === 'loading' && '*:btn-disabled'
                        )}
                    >
                        <button
                            className="btn join-item btn-sm sm:btn-md"
                            onClick={() =>
                                maxRows < filteredMedicineList.length
                                    ? setMaxRows((p) => p + 11)
                                    : null
                            }
                        >
                            Show More +
                        </button>
                        <button
                            className="btn  join-item btn-sm sm:btn-md"
                            onClick={() => setMaxRows(filteredMedicineList.length)}
                        >
                            Show All
                        </button>
                        <button
                            className="btn  join-item btn-sm sm:btn-md"
                            onClick={() => setMaxRows(11)}
                        >
                            Show Less
                        </button>
                    </div>
                </article>
            </Breakout>
        </section>
    )
}

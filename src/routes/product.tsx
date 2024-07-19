import { createFileRoute } from '@tanstack/react-router'
import Fuse from 'fuse.js'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import Breakout from '../components/Breakout'
import { ApiProductData, ProductDataField, TransformedProductData } from '../types'
import { PiArrowDown, PiMagnifyingGlass } from 'react-icons/pi'
import useDebounce from '../hooks/useDebounce'
import clsx from 'clsx'
import fallbackData from '../assets/fallbackProductData.json'
import { twMerge } from 'tailwind-merge'
import CustomError from '../components/Error'
import ProductTable from '../components/ProductTable'
import CategoryDialog from '../components/CategoryDialog'

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
    component: memo(Product),

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

    // validateSearch: (search: Record<string, unknown>): ProductSearch => {
    //     const { searchString, categoryFilter } = search
    //     return {
    //         categoryFilter: Array.isArray(categoryFilter) ? categoryFilter : undefined,
    //         searchString: typeof searchString === 'string' ? searchString : undefined,
    //     }
    // },
})

const fuse = new Fuse(fallbackData, {
    keys: ['composition'] satisfies ProductDataField[],
    // keys: ['category', 'composition', 'form'] satisfies ProductDataField[],
})

function Product() {
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
    const categoryDialogRef = useRef<null | HTMLDialogElement>(null)

    // const [medicineList, setMedicineList] = useState<TransformedProductData>(fallbackData)
    const medicineList = fallbackData

    const [categoryVisibility, setCategoryVisibility] = useState<CategoryVisibility>(() => {
        const obj: CategoryVisibility = {}
        medicineList.forEach(({ category }) => {
            obj[category] = true
        })
        return obj
    })

    // const navigate = Route.useNavigate()

    const changeUrlParams = (
        param: keyof ProductSearch,
        newValue: ProductSearch[keyof ProductSearch]
    ) => {
        // navigate({ search: (prev) => ({ ...prev, [param]: newValue }) })
    }

    const handleCheckboxChange = (category: string, checked: boolean) => {
        const newValue = { ...categoryVisibility }

        newValue[category] = checked

        setCategoryVisibility(newValue)

        // changeUrlParams(
        //     'categoryFilter',
        //     Object.keys(newValue).filter((v) => newValue[v])
        // )
    }
    // const { searchString: urlSearchString, categoryFilter: urlCategoryFilter } = Route.useSearch()

    const [searchString, setSearchString] = useState('')
    // const [searchString, setSearchString] = useState(urlSearchString ?? '')

    const [maxRows, setMaxRows] = useState(12)

    const debounceValue = useDebounce(searchString, 500)

    // useEffect(() => {
    //     fetchData()
    //         // .then((data) => TransformApiData(data))
    //         .then((data) => {
    //             setMedicineList(data)
    //
    //             const obj: CategoryVisibility = {}
    //             data.forEach(({ category }) => {
    //                 obj[category] = true
    //                 // urlCategoryFilter === undefined || urlCategoryFilter.includes(category)
    //             })
    //             setCategoryVisibility(obj)
    //         })
    // }, [])

    // const fuse = useRef<Fuse<(typeof medicineList)[number]> | null>(null)

    const filteredMedicineList =
        debounceValue.length > 1 ? fuse.search(debounceValue).map((f) => f.item) : medicineList
    // const filteredMedicineList = medicineList
    // const filteredMedicineList =
    // fuse.current && debounceValue.length > 1
    //     ? fuse.current.search(debounceValue).map((f) => f.item)
    //     : medicineList

    // useEffect(() => {
    // console.log('fuse')
    // fuse.current = new Fuse(medicineList, {
    // keys: ['composition'] satisfies ProductDataField[],
    // keys: ['category', 'composition', 'form'] satisfies ProductDataField[],
    //     })
    // }, [medicineList])
    return (
        <section className="space-y-10">
            <Breakout>
                <article className="mx-auto space-y-10">
                    <section className="flex justify-center gap-3 max-md:flex-wrap">
                        <label className="input input-md input-bordered flex basis-full items-center gap-2 sm:justify-self-start">
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
                                onBlur={(e) => {
                                    changeUrlParams('searchString', e.target.value)
                                }}
                            />
                            <PiMagnifyingGlass />
                        </label>

                        <button
                            className="btn shrink basis-full capitalize"
                            onClick={() => {
                                const modal = categoryDialogRef.current
                                if (modal instanceof HTMLDialogElement) modal.showModal()
                            }}
                        >
                            Filter by category
                        </button>

                        <CategoryDialog
                            categories={categoryVisibility}
                            stateSetter={setCategoryVisibility}
                            dialogRef={categoryDialogRef}
                        />
                    </section>

                    <ProductTable
                        products={filteredMedicineList
                            .filter(({ category }) => categoryVisibility[category])
                            .slice(0, maxRows)}
                    />

                    <div className={clsx('join flex *:btn-ghost *:basis-1/3 *:border-neutral-300')}>
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

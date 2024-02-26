import React, { useState } from 'react'
import TextField from '../components/TextField'
import {
    Checkbox,
    Box,
    FormControlLabel,
    FormGroup,
    useMediaQuery,
    debounce,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import medicineInfo from '../../assets/medicine.json'
import Fuse from 'fuse.js'
import { ProductList } from '../components/ProductList'
import { ArrowDownwardRounded } from '@mui/icons-material'

const fuse = new Fuse(medicineInfo, { keys: ['name'] })

export const AllProducts = () => {
    const [params, setParams] = useSearchParams()

    const [products, setProducts] = useState(medicineInfo)

    const availableFilters = [
        ...Array.from(new Set(medicineInfo.map(med => med.division))),
        ...Array.from(new Set(medicineInfo.map(med => med.type))),
    ]

    const filterFromParams = params.getAll('filter')

    const applyFilter = (val: string, filter: string[]) => {
        const result =
            val.length >= 1
                ? fuse
                      .search(val)
                      .map(item => item.item)
                      .filter(item => filter.includes(item.type) || filter.includes(item.division))
                : medicineInfo.filter(item => filter.includes(item.type) || filter.includes(item.division))
        setProducts(result)
    }

    const [searchValue, setSearchValue] = useState(params.get('search') ?? '')

    const applyFilterWithDelay = debounce(applyFilter, 800)

    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = e.target.value
        setSearchValue(val)
        setParams({ search: val })
        if (val.length > 0)
            applyFilterWithDelay(
                val,
                appliedFilter.filter(val => val.checked).map(val => val.label),
            )
    }

    const [appliedFilter, setAppliedFilter] = useState(
        availableFilters.map(label => ({
            label,
            checked: filterFromParams.length ? filterFromParams.includes(label) : true,
        })),
    )

    const handleFilterChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let newAppliedFilter = [...appliedFilter]
        newAppliedFilter[index].checked = event.target.checked
        setAppliedFilter(newAppliedFilter)
        const filter = newAppliedFilter.filter(val => val.checked).map(val => val.label)
        setParams({ filter })
        applyFilter(searchValue, filter)
    }

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'grid', gap: 3, placeItems: 'center', mb: 3 }}>
                <TextField
                    sx={{ width: 'calc(1px + 50%)' }}
                    placeholder='Search...'
                    helperText='Enter medicine name'
                    value={searchValue}
                    onChange={handleSearchValueChange}
                />

                <Filter checked={appliedFilter} handleChange={handleFilterChange} />
            </Box>

            <ProductList products={products} />
        </Box>
    )
}

const Filter = (props: {
    checked: { label: string; checked: boolean }[]
    handleChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    const { checked, handleChange } = props

    const isScreenSmall = useMediaQuery('(max-width: 600px)')

    return (
        <Accordion sx={{ border: 'solid 2px lightgrey' }} elevation={0}>
            <AccordionSummary expandIcon={<ArrowDownwardRounded />}>Filter</AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    {checked.map((state, index) => (
                        <FormControlLabel
                            key={state.label}
                            label={state.label.toLowerCase()}
                            control={
                                <Checkbox
                                    checked={checked[index].checked}
                                    onChange={handleChange(index)}
                                    inputProps={{ 'aria-label': state.label }}
                                />
                            }
                        />
                    ))}
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    )
}

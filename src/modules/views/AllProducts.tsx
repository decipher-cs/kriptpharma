import React, { useCallback, useEffect, useState } from 'react'
import TextField from '../components/TextField'
import {
    Checkbox,
    Box,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    useMediaQuery,
    debounce,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material'
import Typography from '../components/Typography'
import { useNavigate, useSearchParams } from 'react-router-dom'
import medicineInfo from '../../assets/medicine.json'
import Fuse from 'fuse.js'
import { ProductList } from '../components/ProductList'
import { ArrowDownwardRounded } from '@mui/icons-material'

const fuse = new Fuse(medicineInfo, { keys: ['name'] })

export const AllProducts = () => {
    const isScreenSmall = useMediaQuery('(max-width: 600px)')

    const [value, setValue] = useState('')

    const [products, setProducts] = useState(medicineInfo)

    const divisions = Array.from(new Set(medicineInfo.map(med => med.division)))

    const types = Array.from(new Set(medicineInfo.map(med => med.type)))

    const filterOptions = [...types, ...divisions]

    const [filter, setFilter] = useState(filterOptions)

    const [params, setParams] = useSearchParams()

    const instantFilter = (val: string, filter: string[]) => {
        const result = fuse
            .search('arpit')
            .map(item => item.item)
            .filter(item => filter.includes(item.type) || filter.includes(item.division))
        setProducts(result)
    }

    const debouncedFilter = debounce(instantFilter, 500)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = e.target.value
        setValue(val)
        if (val.length > 0) debouncedFilter(val, filter)
    }

    return (
        <Box sx={{ p: 3 }}>
            <TextField placeholder='Search...' helperText='Enter medicine name' value={value} onChange={handleChange} />

            <Accordion defaultExpanded sx={{ my: 3 }}>
                <AccordionSummary expandIcon={<ArrowDownwardRounded />}>Filter</AccordionSummary>
                <AccordionDetails>
                    <FormGroup row={!isScreenSmall}>
                        {filterOptions.map(fil => {
                            return (
                                <FormControlLabel
                                    key={fil}
                                    label={fil.toLowerCase()}
                                    control={
                                        <Checkbox
                                            defaultChecked
                                            onChange={(_, checked) => {
                                                const newFilters = checked
                                                    ? [...filter, fil]
                                                    : filter.filter(item => item !== fil)
                                                setFilter(newFilters)
                                                instantFilter(value.length ? value : ' ', newFilters)
                                            }}
                                        />
                                    }
                                />
                            )
                        })}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

            <ProductList products={products} />
        </Box>
    )
}

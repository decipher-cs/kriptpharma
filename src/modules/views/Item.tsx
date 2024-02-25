import { Box } from '@mui/system'
import { useNavigate, useParams } from 'react-router-dom'
import Typography from '../components/Typography'
import medicineInfo from '../../assets/medicine.json'
import { Accordion, AccordionDetails, AccordionSummary, Chip, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { NavigateBeforeRounded, ExpandMore, NavigateNextRounded, ExpandMoreRounded } from '@mui/icons-material'

const images = [
    {
        url: 'https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export const Item = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    if (!id) {
        navigate('/')
        throw new Error('Incorrect URL parameter when viewing product')
    }

    const product = medicineInfo.find(item => item.index === Number(id))

    if (!product) {
        navigate('/')
        throw new Error('No product')
    }

    const { name, MRP, type, status, packingType, saltComposition, oldUrl } = product

    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `'image name'
                                        'image type'
                                        'image status'
                                        'image packing'
                                        'image salt'`,
                }}
            >
                <Box sx={{ width: '50vw', height: '300px', border: 'solid black 3px', gridArea: 'image', p: 1 }}>
                    <Carousel />
                </Box>
                <Typography variant='h4' sx={{ gridArea: 'name' }}>
                    {name}
                </Typography>
                <Typography variant='body1' sx={{ gridArea: 'type' }}>
                    {type}
                </Typography>
                <Typography variant='caption' sx={{ gridArea: 'status' }}>
                    <Chip label={status} />
                </Typography>
                <Typography variant='subtitle1' sx={{ gridArea: 'packing' }}>
                    {packingType}
                </Typography>
                <Typography variant='subtitle2' sx={{ gridArea: 'salt' }}>
                    {saltComposition}
                </Typography>
            </Box>
            <Box sx={{ background: 'grey' }}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRounded />}>Description</AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
                        nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
                        est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                        proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
                        reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
                        ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRounded />}>Uses</AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
                        nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
                        est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                        proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
                        reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
                        ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRounded />}>Side-Effects</AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
                        nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
                        est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                        proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
                        reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
                        ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
}

const Carousel = (props: { autoScroll?: boolean; autoScrollInterval?: number }) => {
    const {} = props
    const autoScrollInterval = props.autoScrollInterval ?? 6000
    const autoScroll = props.autoScroll ?? false

    const [trans, setTrans] = useState(0)

    const maxSlides = images.length

    const nextSlide = () => {
        setTrans(p => {
            if (p >= maxSlides - 1) return 0
            return p + 1
        })
    }
    const prevSlide = () => {
        setTrans(p => {
            if (p <= 0) return maxSlides - 1
            return p - 1
        })
    }

    useEffect(() => {
        const id = autoScroll ? setInterval(nextSlide, autoScrollInterval) : undefined
        return () => {
            if (autoScroll) clearInterval(id)
        }
    }, [])

    return (
        <Box sx={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative' }}>
            <Box
                sx={{
                    width: maxSlides * 100 + '%',
                    height: '100%',

                    background: 'red',
                    display: 'flex',
                    translate: '-' + (100 / maxSlides) * trans + '%',
                    transition: 'translate 0.1s linear',
                }}
            >
                {images.map((img, i) => (
                    <Box component={'a'} target='_blank' href={img.url} key={i} sx={{ width: 100 / maxSlides + '%' }}>
                        <img
                            src={img.url}
                            height='100%'
                            width='100%'
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </Box>
                ))}
            </Box>
            <IconButton
                sx={{ position: 'absolute', border: 'solid black 1px', left: 0, top: '50%', translate: '0px -50%' }}
                onClick={prevSlide}
            >
                <NavigateBeforeRounded />
            </IconButton>

            <IconButton
                sx={{ position: 'absolute', border: 'solid black 1px', right: 0, top: '50%', translate: '0px -50%' }}
                onClick={nextSlide}
            >
                <NavigateNextRounded />
            </IconButton>
        </Box>
    )
}

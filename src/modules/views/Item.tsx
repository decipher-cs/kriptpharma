import { Box, useTheme } from '@mui/system'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Typography from '../components/Typography'
import medicineInfo from '../../assets/medicine.json'
import { Accordion, AccordionDetails, AccordionSummary, Chip, IconButton, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { NavigateBeforeRounded, ExpandMore, NavigateNextRounded, ExpandMoreRounded } from '@mui/icons-material'
import customTheme from '../theme'
const content = [
    {
        url: 'https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frame: (
            <iframe
                src='https://drive.google.com/file/d/1e9cF5PZQfQdf6bHBK5CNAEPpojQoLOEK/preview'
                width='640'
                height='480'
                allow='autoplay'
            ></iframe>
        ),
    },
    {
        url: 'https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frame: (
            <iframe
                src='https://drive.google.com/file/d/1eKhCiIH2NNx9Z4dV0IjEkZtko7ySDIoI/preview'
                width='640'
                height='480'
                allow='autoplay'
            ></iframe>
        ),
    },
    {
        url: 'https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frame: (
            <iframe
                src='https://drive.google.com/file/d/1358zVVDalNAkZOvimnQpan52Rq8VgIZU/preview'
                width='640'
                height='480'
                allow='autoplay'
            ></iframe>
        ),
    },
]

export const Item = () => {
    const { id } = useParams()

    const theme = useTheme(customTheme)

    const navigate = useNavigate()

    const product = medicineInfo.find(item => item.index === parseInt(id ?? ''))

    const isScreenSmall = useMediaQuery(() => theme.breakpoints.down('md'))

    if (!id || !product) {
        return <div>not here</div>
        // navigate('/pageNotFound')
        // import.meta.env.DEV? throw new Error('No product with this id'): <Link>
    }

    const { name, MRP, type, status, packingType, saltComposition, oldUrl } = product

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: isScreenSmall ? 'wrap' : 'nowrap',
                    textAlign: isScreenSmall ? 'center' : null,
                    justifyContent: isScreenSmall ? 'center' : 'initial',
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        // aspectRatio: '20/15',
                        // border: 'solid 5px ' + theme.palette.primary.light,
                        // width: 'min(40vw, 600px)',
                        width: '640px',
                        height: '480px',
                        p: 0,
                        borderRadius: theme.shape.borderRadius,
                        overflow: 'hidden',
                    }}
                >
                    <Carousel />
                </Box>
                <Box sx={{ display: 'grid', alignContent: 'flex-start', justifyContent: 'center', gap: 3, mt: 2 }}>
                    <Typography variant='h4' sx={{}}>
                        {name}
                    </Typography>
                    <Typography variant='caption' sx={{}}>
                        <Chip label={status} sx={{ mr: 2 }} />
                        <Chip label={type} />
                    </Typography>
                    <Typography variant='subtitle1' sx={{}}>
                        Salt: {saltComposition}
                    </Typography>
                    <Typography variant='subtitle2' sx={{}}>
                        Packing: {packingType}
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    mt: 10,
                }}
            >
                <Accordion defaultExpanded sx={{ background: 'white' }} elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                        <Typography variant='h6'>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='subtitle1'>
                            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
                            ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                            officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
                            dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
                            nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                            officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
                            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded sx={{ background: 'white' }} elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                        <Typography variant='h6'>Uses</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography variant='subtitle1'>
                            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
                            ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                            officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
                            dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
                            nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                            officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
                            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded sx={{ background: 'white' }} elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                        <Typography variant='h6'>Side-Effects</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='subtitle1'>
                            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
                            ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                            officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
                            dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
                            nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                            officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
                            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                        </Typography>
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

    const maxSlides = content.length

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

                    display: 'flex',
                    translate: '-' + (100 / maxSlides) * trans + '%',
                    transition: 'translate 0.2s linear',
                }}
            >
                {content.map((img, i) => (
                    <Box component={'a'} target='_blank' href={img.url} key={i} sx={{ width: 100 / maxSlides + '%' }}>
                        {img.frame}
                        {/* <img */}
                        {/*     src={img.url} */}
                        {/*     height='100%' */}
                        {/*     width='100%' */}
                        {/*     style={{ */}
                        {/*         objectFit: 'cover', */}
                        {/*         objectPosition: 'center', */}
                        {/*         display: 'block', */}
                        {/*         marginInline: 'auto', */}
                        {/*     }} */}
                        {/* /> */}
                    </Box>
                ))}
            </Box>
            <IconButton
                sx={{ position: 'absolute', left: 0, top: '50%', translate: '0px -50%', background: 'white' }}
                onClick={prevSlide}
            >
                <NavigateBeforeRounded />
            </IconButton>

            <IconButton
                sx={{ position: 'absolute', right: 0, top: '50%', translate: '0px -50%', background: 'white' }}
                onClick={nextSlide}
            >
                <NavigateNextRounded />
            </IconButton>
        </Box>
    )
}

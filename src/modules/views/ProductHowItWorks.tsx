import * as React from 'react'
import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '../components/Button'
import Typography from '../components/Typography'
import { Link, useNavigate } from 'react-router-dom'

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
}

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
}

const image = {
    height: 55,
    my: 4,
}

function ProductHowItWorks() {
    return (
        <Box component='section' sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}>
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component='img'
                    src='/static/themes/onepirate/productCurvyLines.png'
                    alt='curvy lines'
                    sx={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: -180,
                        opacity: 0.7,
                    }}
                />
                <Typography variant='h4' marked='center' component='h2' sx={{ mb: 14 }}>
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={7}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>1.</Box>
                                <Box
                                    component='img'
                                    src='https://freesvg.org/img/1708352915Woman8a.png'
                                    alt='suitcase'
                                    sx={image}
                                />
                                <Typography variant='h5' align='center'>
                                    See our catelog
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>2.</Box>
                                <Box
                                    component='img'
                                    src='https://freesvg.org/img/1708352915Woman8a.png'
                                    alt='graph'
                                    sx={image}
                                />
                                <Typography variant='h5' align='center'>
                                    Find what you need
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>3.</Box>
                                <Box
                                    component='img'
                                    src='https://freesvg.org/img/1708352915Woman8a.png'
                                    alt='clock'
                                    sx={image}
                                />
                                <Typography variant='h5' align='center'>
                                    Get in touch with us
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Button color='secondary' size='large' variant='contained' component='a' href='#contact' sx={{ mt: 8 }}>
                    Get In Touch
                </Button>
            </Container>
        </Box>
    )
}

export default ProductHowItWorks

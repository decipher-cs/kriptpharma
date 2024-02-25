import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '../components/Typography'
import { useNavigate } from 'react-router-dom'

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
}

function ProductValues() {
    const navigate = useNavigate()
    return (
        <Box component='section' sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}>
            <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
                <Box
                    component='img'
                    src='/static/themes/onepirate/productCurvyLines.png'
                    alt='curvy lines'
                    sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                />
                <Grid container spacing={5}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        onClick={() => {
                            navigate('products')
                        }}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box sx={item}>
                            <Box
                                component='img'
                                src='https://cdn-icons-png.flaticon.com/512/508/508735.png'
                                alt='cardiac plus'
                                sx={{ height: 55 }}
                            />
                            <Typography variant='h6' sx={{ my: 5 }}>
                                Cardiac Plus
                            </Typography>
                            <Typography variant='h5'>Coming soon...</Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        onClick={() => {
                            navigate('products')
                        }}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box sx={item}>
                            <Box
                                src='https://cdn-icons-png.flaticon.com/512/4148/4148500.png'
                                component='img'
                                alt='critiskill'
                                sx={{ height: 55 }}
                            />
                            <Typography variant='h6' sx={{ my: 5 }}>
                                Critiskill
                            </Typography>
                            <Typography variant='h5' align='center'>
                                Our range of injections and suture.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigate('products')
                        }}
                    >
                        <Box sx={item}>
                            <Box
                                component='img'
                                src='https://cdn-icons-png.flaticon.com/512/3045/3045095.png'
                                alt='surgiript'
                                sx={{ height: 55 }}
                            />
                            <Typography variant='h6' sx={{ my: 5 }}>
                                Surgiript
                            </Typography>
                            <Typography variant='h5'>Coming soon...</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ProductValues

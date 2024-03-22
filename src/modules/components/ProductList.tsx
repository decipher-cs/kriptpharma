import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, useMediaQuery } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import Typography from '../components/Typography'
import { Link, useNavigate } from 'react-router-dom'
import medicineInfo from '../../assets/medicine.json'
import { memo } from 'react'
import customTheme from '../theme'

export const ProductList = memo((props: { products: typeof medicineInfo }) => {
    const theme = useTheme(customTheme)

    const { products } = props

    const navigate = useNavigate()

    const isScreenSmall = useMediaQuery('(max-width: 600px)')

    return (
        <Box
            sx={{
                display: 'grid',
                gridAutoRows: '1fr',
                gridTemplateColumns: isScreenSmall ? 'repeat(1, 1fr)' : 'repeat(3, min(33%, 400px))',
                justifyContent: 'center',
                gap: 5,
            }}
        >
            {products.map(item => (
                <Card
                    elevation={0}
                    key={item.index}
                    sx={{ display: 'grid', gridTemplateRows: 'min-content min-content  1fr' }}
                >
                    <CardMedia
                        title={item.name}
                        sx={{ height: '250px', borderRadius: '8px' }}
                        image='https://images.unsplash.com/photo-1708769915551-2f4a13f4b9e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    <CardHeader title={item.name} sx={{ alignSelf: 'flex-start' }} />
                    <CardContent sx={{ alignSelf: 'flex-start' }}>
                        <Typography>{item.saltComposition}</Typography>
                        <Typography>{item.packingType}</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%' }}>
                        <Button
                            sx={{ mb: '0%' }}
                            fullWidth
                            variant='contained'
                            href={'product/' + item.index.toString()}
                            onClick={e => {
                                e.preventDefault()
                                navigate(item.index.toString())
                            }}
                        >
                            More
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
})

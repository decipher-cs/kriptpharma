import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '../components/Typography'
import { useNavigate } from 'react-router-dom'
import medicineInfo from '../../assets/medicine.json'
import { memo } from 'react'

export const ProductList = memo((props: { products: typeof medicineInfo }) => {
    const { products } = props

    const navigate = useNavigate()

    const isScreenSmall = useMediaQuery('(max-width: 600px)')

    return (
        <Box
            sx={{
                display: 'grid',
                gridAutoRows: '1fr',
                gridTemplateColumns: isScreenSmall ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)',
                gap: 4,
                justifyContent: 'space-around',
            }}
        >
            {products.map(item => (
                <Card sx={{ border: 'solid red 1px' }} key={item.index}>
                    <CardMedia
                        title='template'
                        sx={{ height: '200px' }}
                        image='https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    <CardHeader title={item.name} />
                    <CardContent>
                        <Typography>content</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => navigate(item.index.toString())}>
                            More
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
})

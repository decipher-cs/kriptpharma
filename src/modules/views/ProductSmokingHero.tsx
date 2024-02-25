import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '../components/Typography'
import { Link } from '@mui/material'

function ProductSmokingHero() {
    return (
        <Container
            component='section'
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
            id='contact'
        >
            <Button
                sx={{
                    border: '4px solid currentColor',
                    borderRadius: 0,
                    height: 'auto',
                    py: 2,
                    px: 5,
                }}
            >
                <Typography variant='h4' component='span'>
                    Contact Us
                </Typography>
            </Button>
            <Typography variant='subtitle1' sx={{ my: 3, display: 'grid', placeItems: 'center', gap: 1 }}>
                <Box>We are here to help. Get in touch!</Box>
                <Link href='mailto:info@kriptpharma.com'>info@kriptpharma.com</Link>
                <Link href='tel:+918571913753'>(+91) 857-191-3753</Link>
            </Typography>
            <Box
                component='img'
                src='https://img.freepik.com/free-vector/heart-shaped-stethoscope-listening-heart_78370-963.jpg?w=740&t=st=1708538514~exp=1708539114~hmac=f29033e2bdfa5037a19c416a11ba840e46370584fc802302bcbbfe0376bc0c31'
                alt='stethoscope'
                sx={{ width: 60 }}
            />
        </Container>
    )
}

export default ProductSmokingHero

import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'

const backgroundImage =
    'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: 'none' }} src={backgroundImage} alt='increase priority' />

            <Typography color='inherit' align='center' variant='h2' marked='center'>
                Kriptpharma
            </Typography>
            <Typography color='inherit' align='center' variant='h5' sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
                Enjoy Medicine
            </Typography>
            <Button
                color='secondary'
                variant='contained'
                size='large'
                component='a'
                href='/premium-themes/onepirate/sign-up/'
                sx={{ minWidth: 200 }}
            >
                Catalog
            </Button>
            <Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
                Discover the medicine within you
            </Typography>
        </ProductHeroLayout>
    )
}

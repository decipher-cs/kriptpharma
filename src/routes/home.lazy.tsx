import { createLazyFileRoute } from '@tanstack/react-router'
import Hero from '../view/home/Hero'
import FeaturedProducts from '../view/home/FeaturedProducts'
import { ReasonsToChooseUse } from '../view/home/ReasonsToChooseUse'
import { Specialties } from '../view/home/Specialties'
import { CompanyStats } from '../view/home/CompanyStats'

export const Route = createLazyFileRoute('/home')({
    component: () => <Home />,
})

const Home = () => {
    return (
        <div className="-mt-8 space-y-10">
            <Hero />

            <FeaturedProducts />

            <ReasonsToChooseUse />

            <Specialties />

            <CompanyStats />
        </div>
    )
}

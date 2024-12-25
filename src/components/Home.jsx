import React from 'react'
import CarolHero from './CarolHero'
import CarolAbout from './CarolAbout'
import CarolService from './CarolService'
import CarolCTA from './CarolCTA'
import CarolCTAvid from './CarolCTAvid'
import CarolTestimonial from './CarolTestimonial'
import CarolBanner from './CarolBanner'
import CarolFooter from './CarolFooter'

export default function Home() {
    return (
        <div className='w-full  mx-auto max-w-[1300px]'>
            <CarolHero />
            <CarolAbout />
            <CarolService />
            <CarolCTA />
            <CarolCTAvid />
            <CarolTestimonial />
            <CarolBanner />
            <CarolFooter />
        </div>
    )
}

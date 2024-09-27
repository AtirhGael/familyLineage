import React from 'react'
import { BlogPost, Gallery, Heritage, Hero, Navbar } from './components'

export default function Routes() {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <Heritage />
            <Gallery />
            <BlogPost />
            {/* <Feedbacks/> */}
        </div>
    )
}

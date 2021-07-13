import React from 'react'
import {Hero} from '../componenet/hero'
import {Banner} from '../componenet/banner'
import { Services } from '../componenet/services'
import { Featuresrooms } from '../componenet/featuresrooms'
import {
    Link
   } from "react-router-dom"
export const Home = () => {
    return (
        <>
            <Hero>
            <Banner title={'Luxurious Rooms'} subtitle={'Deluxe Rooms starting at $299'}>
            <Link to="/room" className="btn-primary ">Our Rooms</Link>
            </Banner>
            </Hero>
            <Services/>
            <Featuresrooms/>
        </>
    )
}

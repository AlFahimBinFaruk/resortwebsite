import React from 'react'
import {Hero} from '../componenet/hero'
import {Banner} from '../componenet/banner'
import {
    Link
   } from "react-router-dom"
export const Error = () => {
    return (
        <div>
            <Hero>
            <Banner title={'404'} subtitle={'Page Not Found'}>
            <Link to="/" className="btn-primary ">Back To Home</Link>
            </Banner>
            </Hero>
        </div>
    )
}

import React from 'react'
import {Hero} from '../componenet/hero'
import {Banner} from '../componenet/banner';
import {useGlobalContext} from '../contex'
import { Roomcontainer } from '../componenet/roomcontainer';

import {
    Link
   } from "react-router-dom"
export const Room = () => {
   
    
    return (
        <div>
            <Hero hero={"roomsHero"}>
            <Banner title={'our rooms'} >
            <Link to="/" className="btn-primary ">return to home</Link>
            </Banner>
            </Hero>
            <Roomcontainer/>
            
        </div>
    )
}

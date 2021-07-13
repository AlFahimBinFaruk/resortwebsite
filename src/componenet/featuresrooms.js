import React from 'react'
import { Loading } from './loading'
import { Title } from './title'
import {useGlobalContext} from '../contex'
import { Rooms } from './rooms'
export const Featuresrooms = () => {
    const {loading,featuredrooms} =useGlobalContext();
    console.log("loading is",loading)
    const rooms= featuredrooms.map((rooms,index)=>{
       return <Rooms key={index} {...rooms}/>
    })
    return (
        <section className="featured-rooms">
            <Title title={'featured rooms'}/>
            <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms }
            </div>
           
        </section>
    )
}

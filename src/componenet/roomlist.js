import React from 'react'
import {useGlobalContext} from '../contex'
import { Rooms } from './rooms'
export const Roomlist = ({rooms}) => {
    if(rooms.length===0){
        return (
            <div className="empty-search">
                <h6>No Result Found</h6>
            </div>
        )
    }
    return (
        <section className="roomslist">
           <div className="roomslist-center">
            {rooms.map((room,index)=>{
             return <Rooms key={index} {...room}/>
            })}
        </div>
        </section>
       
    )
}

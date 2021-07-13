import React from 'react'
import {useGlobalContext} from '../contex'
import { Roomfilter } from '../componenet/roomfilter';
import { Roomlist } from '../componenet/roomlist';
export const Roomcontainer = () => {
    const {sortedrooms,rooms}=useGlobalContext();
    return (
        <div>
         <Roomfilter rooms={rooms}/>
         <Roomlist rooms={sortedrooms}/>
         
        </div>
    )
}

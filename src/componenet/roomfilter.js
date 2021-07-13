import React, { useState, useContext, useReducer, useEffect } from 'react'
import { Title } from './title'
import { useGlobalContext } from '../contex'
export const Roomfilter = ({rooms}) => {
    let {
      loading,featuredrooms,singleroom,sortedrooms,type,capacity,price,minprice,maxprice,minsize,maxsize,breakfast,pets,setSortedRooms,setCapacity,setPrice,setMinprice,setMaxprice,setMinsize,setMaxsize,setBreakfast,setPets,setLoading,getsingleroom,handletype
    }=useGlobalContext();

    
    const rtype=rooms.map((room)=>room.type);
    // const type=...new Set(type)
    const typearr=["all",...new Set(rtype)]
    const rcapacity=rooms.map((room)=>room.capacity);
    // const type=...new Set(type)
    const capacityarr=[...new Set(rcapacity)]
   // console.log(typearr)
    return (
      
       <section className="filter-container">
             <Title title={"search -rooms"}/>
             <form className="filter-form">
                 <div className="form-group">
                     <label htmlFor="type">Room Type</label>
                     <select name="type" id="type" value={type}  onChange={handletype} className="form-control">
                         {typearr.map((type,index)=>{
                             return <option key={index} value={type}>{type}</option>
                         })}
                         </select>
                 </div>

                 <div className="form-group">
                     <label htmlFor="capacity">Guests</label>
                     <select name="capacity" id="capacity" value={capacity}  onChange={handletype} className="form-control">
                         {capacityarr.map((capacity,index)=>{
                             return <option key={index} value={capacity}>{capacity}</option>
                         })}
                         </select>
                 </div>

                 <div className="form-group">
                   <label htmlFor="price">
                     room price ${price}
                   </label>
                   <input type="range" name="price" min={minprice} max={maxprice} id="price" value={price} onChange={handletype} className="form-control"/>
                 </div>

                 <div className="form-group">
                   <label htmlFor="size">room size</label>
                   <div className="size-inputs">
                      <input type="number" name="minSize" id="size" value={minsize} onChange={handletype} className="size-input" />
                      <input type="number" name="maxSize" id="size" value={maxsize} onChange={handletype} className="size-input" />
                   </div>
                 </div>
                 <div className="form-group">
                 <div className="single-extra">
                   <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handletype}/>
                   <label htmlFor="breakfast">Breakfast</label>
                 </div>

                 <div className="single-extra">
                   <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handletype}/>
                   <label htmlFor="pets">pets</label>
                 </div>
                 </div>
                 
             </form>          
       </section>
    )
}

import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {useGlobalContext} from '../contex'
import { Banner } from '../componenet/banner'
import StyledHero from '../componenet/StyledHero'
export const Singleroom = () => {
    const {slug}=useParams();
    const {rooms,loading,setLoading,singleroom,getsingleroom}=useGlobalContext();
    
   //console.log(getsingleroom(slug))
      
    const singleroomdata=getsingleroom(slug)
        
        console.log(singleroomdata)
        
        
        

       
       
       
    if(!singleroomdata){
        return (
        <div className="error">
            <h3>No room found</h3>
            <Link to="/" className="btn-primary">Back To Home</Link>
        </div>
            )
    }
    
    
        const {name,description,size,type,capacity,extras,breakfast,pets,images,price}=singleroomdata 
        // const {mainImg,...defaultImg}=images;
        // console.log(mainImg,defaultImg)
   
        
    return (
        <>
        <StyledHero img={images[0]} >
        <Banner title={`${name} room`} >
            <Link to="/room" className="btn-primary ">return to room</Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {images.map((img,index)=>{
                    return (<img key={index} src={img.fields.file.url}/>)
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>Details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>Price: ${price}  </h6>
                    <h6>Size: {size} SQFT</h6>
                    <h6>max-capacity: {capacity>1?`${capacity} people` :`${capacity} people`}</h6>
                    <h6>Pets: {pets ?"Pets Allowed" : "No Pets Allowed"}</h6>
                    <h6>{breakfast && "Free Breakfast Included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((extra,index)=>{
                    return (<li key={index}>-{extra}</li>)
                })}
            </ul>
        </section>
        </>
    )  
   
    
}

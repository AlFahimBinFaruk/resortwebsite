import React from 'react'
import {
    Link
  } from "react-router-dom";
  import {useGlobalContext} from '../contex'
  import { Loading } from './loading'

export const Rooms = ({name,slug,image,price}) => {
  const {loading,setLoading}=useGlobalContext();
  if(loading){
      return (
          <Loading/>
      )
  }
    return (
        <article className="room">
            <div className="img-container">
                <img src={image[0]} alt={name}/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                   <Link to={`/room/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

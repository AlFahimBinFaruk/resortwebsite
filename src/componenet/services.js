import React from 'react'
import {Title} from './title'
import { useState } from 'react';
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'
export const Services = () => {
    const data=[{
        icon:<FaCocktail/>,
        title:"free Cocktail",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        icon:<FaHiking/>,
        title:"Endless hiking",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        icon:<FaShuttleVan/>,
        title:"free shuttle",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        icon:<FaBeer/>,
        title:"strongest beer",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }]
    const [services, setServices] = useState(data);
     console.log(services)
    return (
        <section className="services">
            <Title title={'services'}/>
            <div className="services-center">
                {services.map((item,index)=>{
                    return (
                 <article className="service" key={index}>
                     <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                 </article>
                    )
                })}
                
            </div>
        </section>
    )
}

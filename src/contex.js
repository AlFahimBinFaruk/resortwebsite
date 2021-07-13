import React, { useState, useContext, useReducer, useEffect } from 'react'
import { useCallback } from 'react'
import Client from './Contentful';
import data from './data'

const AppContext = React.createContext()
const AppProvider = ({children}) => {

  
    
    const [loading, setLoading] = useState(true)
    const [rooms, setRooms] = useState([])
    const [singleroom, setSingleroom] = useState([])
    const [featuredrooms, setFeaturedrooms] = useState([])
    const [sortedrooms, setSortedRooms] = useState([])
    const [type, setType] = useState("all")
    const [capacity, setCapacity] = useState(1)
    const [price, setPrice] = useState("")
    const [minprice, setMinprice] = useState(0)
    const [maxprice, setMaxprice] = useState("")
    const [minsize, setMinsize] = useState(0)
    const [maxsize, setMaxsize] = useState([])
    const [breakfast, setBreakfast] = useState(false)
    const [pets, setPets] = useState(false)
    const component= async()=>{
        setLoading(true)
        let newroom=await getdata();
        //console.log("newroom is",newroom)
        setRooms(newroom);
        setSortedRooms(newroom);
        setPrice(Math.max(...newroom.map((room)=>room.price)))
        setMaxprice(Math.max(...newroom.map((room)=>room.price)))
        setMaxsize(Math.max(...newroom.map((room)=>room.size)))
        let newfeaturedroom=newroom.filter((room)=>room.featured===true);
        setFeaturedrooms(newfeaturedroom);  
        setLoading(false) 
    }


    const getdata=async()=>{
      let response=await Client.getEntries({
        content_type:"beachresort",
        order:'-fields.name'//the api will give result according to the name first letter from last to first..
      })
      console.log("response is",response.items)
        let normaldata=response.items.map((item)=>{
            let id=item.sys.id;
            let image=item.fields.images.map((image)=>image.fields.file.url);
            let finaldata={...item.fields,image,id};
            return finaldata
        })
        return normaldata
    }


   const getsingleroom=(slug)=>{
    const setsroom= rooms.find((room)=> {return room.slug===slug});
    return setsroom
   }



const handletype=(event)=>{
  const target=event.target;
  let value=target.type==="checkbox" ? target.checked : target.value;
  const name=event.target.name;

  if(name==="type"){
 setType(value)
  }
  if(name==="capacity"){
     setCapacity(value)
  }
  if(name==="price"){
   setPrice(value)
  }
  if(name==="minSize"){
    value=parseInt(value)
    setMinsize(value)
  }
  if(name==="maxSize"){
    value=parseInt(value)
   setMaxsize(value)
  }
  if(name==="breakfast"){
    setBreakfast(value)
  }
  if(name==="pets"){
    setPets(value)
  }
  //console.log("naem is ",name,"vlaue is",value)
}


  const filerroom=()=>{
      let temproom=rooms;
      //console.log("temporray room is",temproom)
      // capacity=parseInt(capacity);
      // price=parseInt(price)
     
        if(type !=="all"){
          temproom=temproom.filter((room)=> room.type===type)
        }
        if(capacity !==1){
          temproom=temproom.filter((room)=> room.capacity>=capacity)
        }
        if(breakfast){
          temproom=temproom.filter((room)=> room.breakfast>=true)
        }
        if(pets){
          temproom=temproom.filter((room)=> room.pets>=true)
        }
        temproom=temproom.filter((room)=> room.price<=price)
        temproom=temproom.filter((room)=> room.size>=minsize && room.size<=maxsize)
      
        setSortedRooms(temproom)
       
    }


    // const [state, dispatch] = useReducer(reducer, defaultval)

    useEffect(() => {
      component()
    }, [])

    useEffect(() => {
    filerroom()
    }, [capacity ,type,price,minsize,maxsize,breakfast,pets])

    
  return <AppContext.Provider value={{loading,featuredrooms,rooms,singleroom,sortedrooms,type,capacity,price,minprice,maxprice,minsize,maxsize,breakfast,pets,setSortedRooms,setCapacity,setPrice,setMinprice,setMaxprice,setMinsize,setMaxsize,setBreakfast,setPets,setLoading,getsingleroom,handletype}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

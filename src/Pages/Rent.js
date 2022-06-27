
import React, {useEffect, useState,} from 'react'
import { useParams } from 'react-router-dom';
import Contacts from './Properties/Contacts'
import './Rent.css'

import { getFirestore, collection, getDocs, updateDoc } from "firebase/firestore";
import {db} from "../firebase/firebaseApp"


// const getProperties = async (setPropertyArray) => {
//   const querySnapshot = await getDocs(collection(db, "sellForm"));
//   querySnapshot.forEach((doc) => {
//     const property = doc.data();
//     setPropertyArray((existingItems)=>{
//       return [...existingItems, property];
//     })
//   });
// }


const Rent = () => {
  
  const [properties, setProperties] = useState([])
  // const [minRange, setMinRange] = useState(-1)
  // const [maxRange, setMaxRange] = useState(-1)
  const {place} = useParams()
  
  var fullProperties=[]
  useEffect(()=>{
    const getProperties = ()=>{
      const propertiesArray = []
      

      getDocs(collection(db, "sellForm")).then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          propertiesArray.push({...doc.data(), id:doc.id})
        })
        fullProperties=propertiesArray
        if(place)
          {
            
            const res = propertiesArray.filter((property)=>property.Location === place)
            console.log(res)
            setProperties(res)
        
            
          }
          else{

            
            // if(minRange == -1 && maxRange == -1)
            setProperties(propertiesArray)
            
              
          }
        
      }).catch((error)=>{console.log(error.message);})
    }
    if(properties.length === 0)
    {getProperties()}
     
    
    
  }, [])

  const rangeFilter =(minRange,maxRange)=>{
    const res = properties.filter((prop)=>{return(prop.Price > minRange && prop.Price<maxRange) })
    setProperties(res)
  }
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
//  const handleFilter=()=>{
//     setMaxRange(getElementVal("min"))
//     setMinRange(getElementVal("max"))
//     rangeFilter(minRange, maxRange)
//   }

  return (
    <>
    // <form>
    //   <input id="min" placeholder="MIN PRICE" type="number"/>
    //   <input id="max" placeholder='MAX PRICE' type="number"/>
    //   <button >Filter</button>
    //   <button type="reset">Reset</button>
    // </form>
    <div className='layout'>
    {properties.map((property)=>{
      return <Contacts id={property.id} location={property.Location} image={property.Image_URL} name={property.Name_of_Property} price={property.Price} bedrooms={property.Number_of_Bedrooms} bathrooms={property.Number_of_Bathrooms} garages={property.Number_of_Garages} totalsqft={property.Sqft_total} />
    })}
    </div></>
  );
}
export default Rent;


import React, {useEffect, useState} from 'react'
import Contacts from './Properties/Contacts'
import './Rent.css'
import SingleCard from './SingleCard';
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
  useEffect(()=>{
    const getProperties = ()=>{
      const propertiesArray = []

      getDocs(collection(db, "sellForm")).then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          propertiesArray.push({...doc.data(), id:doc.id})
        })
        setProperties(propertiesArray)
      }).catch((error)=>{console.log(error.message);})
    }
    getProperties()
  }, [])

  return (
    <div className='layout'>
    {properties.map((property)=>{
      console.log(property);
      return <Contacts id={property.id} image={property.Image_URL} name={property.Name_of_Property} price={property.Price} bedrooms={property.Number_of_Bedrooms} bathrooms={property.Number_of_Bathrooms} garages={property.Number_of_Garages} totalsqft={property.Sqft_total} />
    })}
    </div>
  );
}
export default Rent;

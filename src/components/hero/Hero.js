import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import './Hero.css'



const Hero = () => {
    const [loc,setLoc] = useState("")
    let navigate = useNavigate();
    
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                <form className='search' onSubmit={()=>{navigate(`/rent/q/${loc}`)}}>

                    <div>
                        <input type='text' placeholder='Enter Location' onChange={(e)=>setLoc(e.target.value)} />
                    </div>
                    
                    <div className='radio'> 
                    <button type='submit'><AiOutlineSearch className='icon' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
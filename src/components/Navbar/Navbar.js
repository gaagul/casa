import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click);
        
        
    }

    return (
        <div className='navbar'>
            <div className='container'>
                <Link to='/'><h1><span><BsFillHouseFill />CA</span>SA</h1></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Rent'>RENT</Link></li>
                    <li><a href='#'>BUY</a></li>
                    <li><a href='#'>SELL</a></li>
                </ul>
                <button className='btn'>Contact Us</button>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
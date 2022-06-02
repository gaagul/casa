import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Authentication from '../../auth'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseApp'
import Profile from './profile'


const Navbar = () => {
    

    const[click, setClick] = useState(false)
    const[login,setLogin] = useState(false)
    auth.onAuthStateChanged((user)=>{

        if(user)
            {
            setLogin(true)
            // console.log('This is the user: ', user)
            }
        else
            setLogin(false)
    })
    const handleClick = () => {
        setClick(!click);
        }
    let navigate = useNavigate();

    return (
        <div className='nnavbar'>
            <div className='ncontainer'>
                <Link to='/'><h1><span><BsFillHouseFill />CA</span>SA</h1></Link>
                <ul className={click ? 'nnav-menu active' : 'nnav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Rent'>RENT</Link></li>
                    {/* <li><a href='#'>BUY</a></li>
                    <li><Link to='/Sell'>SELL</Link></li> */}
                </ul>
                {login?<Profile />:<button className='nbtn' onClick={()=>{navigate("/Signin")}}>Sign In</button>}
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
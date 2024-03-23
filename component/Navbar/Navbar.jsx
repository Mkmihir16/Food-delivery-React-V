import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../src/assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { Contexapi } from '../../Context/Contexapi'
import Exploremenu from '../ExploreMenu/Exploremenu'
import './Responsive-Navbar.css'
export default function Navbar({setLogin}) {
    const[active,setActive]=useState("about")
    const {gettotalval}=useContext(Contexapi);
    const navigate =useNavigate();
    // console.log(login+" Navbar.jsx");
    return (
        <div className='Navbar'>
            <div className="logo-navbar">
               <Link to='/'> <img src={assets.logo} alt="" /></Link>
            </div>

            <ul>
                <Link to='/' style={{textDecoration:"none", color:"black"}}><li onClick={()=>{setActive("home")}} className={active==="home"?"classactiv-nav":''}>Home</li></Link>
                <li onClick={()=>{setActive("about")}} className={active==="about"?"classactiv-nav":''}>Menu</li>
                <li onClick={()=>{setActive("mobile-app")}} className={active==="mobile-app"?"classactiv-nav":''}>Mobile App</li>
                <li onClick={()=>{setActive("contact-us")}}  className={active==="contact-us"?"classactiv-nav":''}>Contact Us</li>
            </ul>

            <div className="left-navbar">
                <div className="searchicon">
                <img src={assets.search_icon} alt="" />
                </div>
                
                <div className="navbar-bag">
                    <Link to='/cart'><img src={assets.bag_icon} alt="" /></Link>
                    <hr />
                    <div className={gettotalval()===0?"":"dot"}></div>
                </div>
                <div className="btn">
                <button onClick={()=>setLogin("on")} className='sign-in-btn'>Sign in</button>
                </div>        
            </div>
        </div>
    )
}

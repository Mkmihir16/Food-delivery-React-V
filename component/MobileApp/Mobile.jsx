import React from 'react'
import "./Mobile.css"
import { assets } from '../../src/assets/assets'
function Mobile() {
  return (
    <>
    <div className="mobilemain">
        <h1>For Better Experience</h1>
        <h2>Download Tomato App</h2>
        <div className="mobile-imgs">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
    </>
  )
}

export default Mobile

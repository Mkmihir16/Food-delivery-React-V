import React, { useState } from 'react'
import "./Home1.css"
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/ExploreMenu/Exploremenu'
import Fooddisplay from '../../component/FoodDisplay/Fooddisplay'
import Loginpage from '../../component/LoginPage/Loginpage'
export default function Home1() {
  const[category,setCategory]=useState("All")

  return (
    <>
    <Header/>
    <Exploremenu category={category} setCategory={setCategory}/>
    <Fooddisplay category={category}/>
    
    </>
  )
}

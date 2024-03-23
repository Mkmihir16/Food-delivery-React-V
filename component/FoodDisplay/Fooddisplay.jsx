import React, { useContext } from 'react'
import "./Fooddisplay.css"
import FoodItem from '../FoodItem/FoodItem'
import { Contexapi } from '../../Context/Contexapi'
import "./Responsive-food-display.css"
function Fooddisplay({category}) {
    const {food_list}=useContext(Contexapi)
  return (
    <>
    <div className="Fooddisplay-main-container">
        <h1>Top dishes near you</h1>
    <div className='Food-display-content'>
        {
            food_list.map((item,index)=>{
              if(category==="All" || category===item.category ){
                return  <FoodItem key={index} id={item._id} name={item.name} img={item.image}  price={item.price} des={item.description}/> 
              }
            })
        }
        
    </div>
    </div>
    </>
  )
}

export default Fooddisplay

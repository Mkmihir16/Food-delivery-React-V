import React, { useContext, useState } from 'react'
import { assets } from '../../src/assets/assets'
import "./FoodItem.css"
import star from "../../src/assets/rating_starts.png"
import "./Responsive-food-item.css"
import { Contexapi } from '../../Context/Contexapi'
export default function FoodItem({ id, name, img, price, des }) {
    const { calitem, additemcart, removeitemcart } = useContext(Contexapi)
    // const [itemCount,setCount]=useState(0)
    // console.log(itemCount)
    return (
        <>
            <div className="food-item-main">
                <div className="food-item-up">
                    <img src={img} alt="" />
                </div>
                <div className="add-item">
                    {!calitem[id] ? (
                        <img className='add-item-initial-img' onClick={() => additemcart(id)} src={assets.add_icon_white} alt="add" />
                    ) : (
                        <div className="food-item-count">
                            <img onClick={() => removeitemcart(id)} src={assets.remove_icon_red} alt="remove" />
                            <p>{calitem[id]}</p>
                            <img onClick={() => additemcart(id)} src={assets.add_icon_green} alt="add" />
                        </div>
                    )}

                </div>

                <div className="food-item-down">
                    <div className="sub-food-item-down">
                        <h2>{name}</h2>
                        <img src={star} alt="" />
                    </div>
                    <p>{des}</p>
                    <h3>$ {price}</h3>
                </div>
            </div>
        </>
    )
}
// 
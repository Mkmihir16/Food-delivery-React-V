import React, { useContext } from 'react'
import { Contexapi } from '../../Context/Contexapi'
import "./Cart11.css"
import { Navigate, useNavigate } from 'react-router-dom';
export default function Cart11() {
  const { food_list, calitem, removeitemcart ,gettotalval} = useContext(Contexapi)
  const navigate =useNavigate();
  
  return (
    <>
      <div className='cart-container'>
        <div className="sub-cart-container">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list.map((item, index) => {
          if (calitem[item._id] > 0) {
            return (
              <div className="cart1-listitem">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{calitem[item._id]}</p>
                <p >{item.price * calitem[item._id]}</p>
                {/* <p onClick={()=>removeitemcart(item._id)}>x</p> */}
                <button onClick={() => removeitemcart(item._id)} className='remove-cart11-item'> Remove</button>
              </div>)

          }

        })}
      </div>
      <div className='cart11-order-summary'>
        <div className="table-content">
          <div className="table-row">
            <div className="table-data">Subtotal</div>
            <div className="table-data">{gettotalval()}</div>
          </div>
          <div className="table-row">
            <div className="table-data">Delivery Charges</div>
            <div className="table-data">{gettotalval()===0?0:2}</div>
          </div>
          <div className="table-row">
            <div className="table-data">Total</div>
            <div className="table-data">{gettotalval()===0?0:gettotalval() + 2}</div>
          </div>
        </div>
        <div className="promo-code-cart11">
          <h3>If you have an promo code , Enter it  here</h3>
          <div className="sub-cart11-input">
          <input type="text" />
          <button>Submit</button>
         
          </div>
        </div>
      </div>
          <button className='order-proceed' onClick={()=>navigate('/order')}>Proceed Order</button>
      
      </>
  )
}

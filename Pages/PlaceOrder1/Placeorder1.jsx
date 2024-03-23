import React, { useContext } from 'react'
import "./Placeorder1.css"
import { Contexapi } from '../../Context/Contexapi'
export default function Placeorder1() {
  const { gettotalval } = useContext(Contexapi)
  return (
    // <div className='placeorder1-main-container'>
    //   <div className="left-placeorder1-container">
    //       <div className="left-placeorder-input">
    //         <input type="text" placeholder='First Name' name="" id="" />
    //         <input type="text" placeholder='Last Name' name="" id="" />
    //       </div>
    //       <div className="left-placeorder-input1">

    //       <input type="email" name="" id="" placeholder='Email'/>
    //       <input type="text" name="" id="" placeholder='Street'/>
    //       </div>
    //       <div className="left-placeorder-input">
    //         <input type="text" placeholder='City' name="" id="" />
    //         <input type="text" placeholder='State' name="" id="" />
    //       </div>
    //       <div className="left-placeorder-input">
    //         <input type="text" placeholder='Zipcode' name="" id="" />
    //         <input type="text" placeholder='Country' name="" id="" />
    //       </div>

    //       <input type="text" name="" id="" placeholder='Phone'/>
    //   </div>
    //   <div className="right-placeorder1-container">
    //   <div className="table-content">
    //       <div className="table-row">
    //         <div className="table-data">Subtotal</div>
    //         <div className="table-data">{gettotalval()}</div>
    //       </div>
    //       <div className="table-row">
    //         <div className="table-data">Delivery Charges</div>
    //         <div className="table-data">{2}</div>
    //       </div>
    //       <div className="table-row">
    //         <div className="table-data">Total</div>
    //         <div className="table-data">{gettotalval() +2}</div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <div className="main-placeorder1">
      <div className="left-main-placeorder1">
        <h1>Delivery Information</h1>
        <div className="sub-left-placeorder">
          <input type="text" placeholder='First Name' name="" id="" />
          <input type="text" placeholder='Last Name' name="" id="" />
        </div>
        <div className="sub-left-placeorder1">

          <input type="email" placeholder='Email' name="" id="" />
          <input type="text" placeholder='Street' name="" id="" />
        </div>

        <div className="sub-left-placeorder">

          <input type="text" placeholder='City' name="" id="" />
          <input type="text" placeholder='State' name="" id="" />
        </div>
        <div className="sub-left-placeorder">

          <input type="text" placeholder='Zip code' name="" id="" />
          <input type="text" placeholder='Country' name="" id="" />
        </div>
        <div className="sub-left-placeorder1">

          <input type="text" placeholder='Phone' name="" id="" />
        </div>
      </div>
      <div className="right-main-placeorder1">
        <h1>Order Summary</h1>
        <div className="table-content-new">
          <div className="table-row-new">
            <div className="table-data-new">Subtotal</div>
            <div className="table-data-new">{gettotalval()}</div>
          </div>
          <div className="table-row-new">
            <div className="table-data-new">Delivery Charges</div>
            <div className="table-data-new">{gettotalval()===0?0:2}</div>
          </div>
          <div className="table-row-new">
            <div className="table-data-new">Total</div>
            <div className="table-data-new">{gettotalval()===0?0:gettotalval() + 2}</div>
          </div>
        <button className='order-proceed order-new-proceed' onClick={()=>navigate('/order')}>Proceed Order</button>
        </div>
      </div>
    </div>
  )
}

//  </div >
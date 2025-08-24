import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const placeOrder = () => {
const {getTotalCartAmount} = useContext(StoreContext);

  return (
   <form className='place-order'>
    <div className="place-order-left">
     <p className="title">Delivery Information</p>
     <div className="multi-fields">
      <input type='text' placeholder='First name' required/>
      <input type='text' placeholder='Last name' required/>
    </div>
    <input type='email' placeholder='Email address' required/>
    <input type='email' placeholder='Street' required/>
    <div className="multi-fields">
      <input type='text' placeholder='City' required/>
      <input type='text' placeholder='State' required/>
    </div>
    <div className="multi-fields">
      <input type='text' placeholder='Zip code' required/>
      <input type='text' placeholder='Country' required/>
    </div>
    <input type='text' placeholder='Phone'/>
    </div>
    <div className="place-order-right">
       <div className="total">
          <h2>Cart Total</h2>
          <div>
            <div className="crt-total-details"> 
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="crt-total-details">
              <p>Delivery Fee</p>
              <p>${20}</p>
            </div>
            <hr />
            <div className="crt-total-details"> 
              <b>Total</b>
              <b>${getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button >PROCCED TO PAYEMENT</button>
        </div>
    </div>
   </form>
  )
}

export default placeOrder

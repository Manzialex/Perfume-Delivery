import './Navbar.css'
import { assets } from '../../assets/script'
import { useState } from 'react'
import { Link, Links } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin}) => {
const [menu, setMenu] =useState("menu");

//  const {getTotalCartAmount} =useState(StoreContext);

  return (
    <div className='Navbar'>
      
    <Link to='/'><h2>Ravishing.</h2></Link>  
     <ul className='nav-menu'>
      <Link to='/' onClick={()=> setMenu("home")}  className={menu==="home"?"active":""}>home</Link>
      <a href='#explore-pdts' onClick={()=> setMenu("products")} className={menu==="menu"?"active":""}>menu</a>
      <a href='#app-download' onClick={()=> setMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>mobile-app</a>
      <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
     </ul>
     <div className="nav-icons">
        <i className="bi bi-search" style={{ fontSize: "20px", marginRight: "15px" }}></i>
        <div className="cart-icon">
       <Link to='/cart'> <i className="bi bi-cart-fill" style={{ fontSize: "20px", marginRight:"25px" }}></i></Link>
         {/* <div className={getTotalCartAmount()===0?"":"dot"}></div>  */}
         <div className ="dot" ></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
     
    </div>
  
   
  )
}

export default Navbar

/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import {  category_list } from "../assets/script";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId)=>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

     const removeFromCart = (itemId) =>{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
//     const removeFromCart = (item_Id) => {
//   setCartItems(prev => {
//     const currentCount = prev[item_Id] || 0;
//     if (currentCount <= 1) {
//       // Remove item completely when count is 0
//       const { [item_Id]: _, ...rest } = prev;
//       return rest;
//     } else {
//       return { ...prev, [item_Id]: currentCount - 1 };
//     }
//   });
// };


   const getTotalCartAmount = () =>{
    let totalAmout = 0;
    for(const item in cartItems){
        if (cartItems[item] > 0){
        let itemInfo = category_list.find((product) => product._id === item);
        totalAmout += itemInfo.price*cartItems[item];
        }
       
    } return totalAmout;
   }

    const contextValue ={
        category_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider
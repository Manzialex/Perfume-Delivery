import React, { useContext}from 'react'
import './ProductDisplay.css'
// import './ProductDisplay.css '
// import { category_list } from '../../assets/script'
import { StoreContext } from '../../context/StoreContext'   
import Productitem from '../Productitem/Prodcutitem'
const ProductDisplay = ({category}) => {

    const {category_list} = useContext(StoreContext)
  return (
    <div className='Product-display' id='product-display'>
      <h2>Top products near you</h2>
      <div className='product-display-list'>
        {category_list.map((item, index)=>{
          if (category==="All" || category===item.category){
return <Productitem key={index} id={item._id} name={item.name} description={item.description}  price={item.price} image={item.Image}  />
          }
            
        })}
      </div>
    </div>
  )
}

export default ProductDisplay


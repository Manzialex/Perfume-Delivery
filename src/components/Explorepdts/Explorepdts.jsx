import React from 'react'
import './Explorepdts.css'
import { productList } from '../../assets/script'
const Explorepdts = ({category,setCategory}) => {

  return (
    <div className='explore-pdts' id='explore-pdts'>
        <h1>Explore Our Products</h1>
        <p className='explore-pdts-text'>
            choose from a diverse list of our products.
        </p>
         <div className="explore-pdts-list">
            {productList.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.product_name? "All":item.product_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.product_name?"active":""} src={item.product_image} alt={item.product_name}  />
                        <p>{item.product_name}</p>
                    </div>
                )
            })}
        </div> 
        <hr />
    </div>
  )
}

export default Explorepdts

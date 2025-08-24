import React, { useContext} from 'react'
import './Productitem.css'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { StoreContext } from '../../context/StoreContext'
const Productitem = ({id,name,image, price,description}) => {

//  const [ itemCount, setItemCount] = useState(0)

 const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div>
      <div className="product-item">
        <div className="product-item-imgcontainer">
            <img src={image} alt="" className="product-item-image" />
            {!cartItems[id]
                  ? <div className='add' onClick={()=>addToCart(id)}>  <i className="bi bi-plus"></i></div>
                  : <div className='product-item-counter'>
                    <div className='product-item-counter-btn' onClick={()=>removeFromCart(id)}>
                     <i className="bi bi-dash"></i>
                     </div>
                     <p>{cartItems[id]}</p>
                      <div onClick={()=>addToCart(id)} className='product-item-counter-btn'>
                        <i className="bi bi-plus-circle"></i>
                      </div>


                  </div>
            }
        </div>
        <div className="product-item-info">
            <p className='product-item-info-p'>{name}</p>
        </div>
        <p className="product-item-description">{description}</p>
           <p className="product-item-price">${price}</p>
      </div>
    </div>
  )
}

export default Productitem

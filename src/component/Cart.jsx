import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.cart);
  const handleRemove =(productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div className='Cart' style={{display:"flex", alignItems:"center"}}>
        <h1>Cart</h1>
        <div className="cartbody">
          {product.map((product)=>(
            <div className="cartdetails">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Cart
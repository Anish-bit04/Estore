import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Navbar.css'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const items =useSelector((state)=> state.cart);
  return (
    <div className='Navbar' >
        <ul className='Nav_List'>
            <NavLink className="Nav_Link"   to="/">Home</NavLink>
            <NavLink className="Nav_Link"   to="/cart">Cart</NavLink>
            <span   className='Nav_CartCount'>Cart Items : {items.length}</span>
        </ul>
    </div>
  )
}

export default Navbar
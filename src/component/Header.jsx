import '../Style/Header.css';
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux'

    const Header = () => {
    const items =useSelector((state)=> state.cart);
    
         return(
        <div className="header">
          
            <div className="header_logo">  
            <NavLink to="/" className='navLink'>
                <StorefrontIcon className='header_logoImage' style={{fontSize:"35px"}} />
                </NavLink> 
                <h2 className="header_logoTitle">eZone</h2>
            </div>

            <div className="header_searchbar">
               <input type="text" className='header_searchinput'/>  
               <SearchIcon className='header_searchicon'
               style={{fontSize:"26px"}}/>
            </div>

            <div className="header_nav">
                <div className="nav_item">
               <div className="navitem1"> Hello Guest</div>
               <div className="navitem2"> Sign In</div>
            </div>

            <div className="nav_item">
               <div className="navitem1"> Your</div>
               <div className="navitem2"> Shop</div>
            </div>

            <div className="nav_itemBasket">
                <NavLink to="/Checkout" className='navLink' >
                <ShoppingBasketIcon className='nav_imgbasket'style={{fontSize:"25px"}}/>
                </NavLink>
                <div className="navitem2 nav_basketCount"> {items.length} </div>
            </div> 

            </div>
            
            </div>
    )
}

export default Header;
import React from 'react'
import Product from './Product'
import '../Style/Home.css'

const Home = () => {
 
  return (
    <div className='Home'>
       <h2 className='home_Title'>Welcome to Redux Toolkit Store</h2>
       <section>
        <h3 className='sec_Title'>Products</h3>
     
        <Product className='home_Product'/> 
        
       
       </section>

    </div>
  )
}

export default Home
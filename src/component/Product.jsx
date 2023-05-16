import React,{useState, useEffect} from 'react';
import '../Style/Product.css';
import {add} from '../store/cartSlice';
import {useDispatch} from 'react-redux';
const Product = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

    useEffect(()=>{
      const fetchProduct = async()=>{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        console.log(data);
        setProducts(data);
      };
      fetchProduct();
    },[])

    const handleAdd = (product) =>{
      dispatch(add(product))
    }


  return (
    <div className="Product">
    {products.map((product) => (
      <div className='product' key={product.id}>
        <img className='product_img' src={product.image} alt={product.title} /> 
        <h3>{product.title}</h3>
        <div className='btn1'>
        <button onClick={()=>handleAdd(product)} className='product_btn'>Add to Cart</button>
        </div>
        </div>
    ))}
    </div>   
    
  )
}

export default Product
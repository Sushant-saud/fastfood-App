import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from './emptyimage.webp'
import './style.css';
const EmptyCart = () => {
  const navigate=useNavigate();
  return (
    <div className='emptyCart'>
      <img src={img} alt='' />
      <button onClick={()=>{navigate("/")}}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;

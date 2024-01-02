import React, { useEffect, useState } from 'react'
import CartContext from '../utils/CartContext'

import { useContext } from 'react'

const Cart = () => {
    const {cartinfo,setCartInfo} = useContext(CartContext);
    let total = 0;

    const handelAddMore = (name)=>{
      const updatedCart = cartinfo.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartInfo(updatedCart); 
      localStorage.setItem('cartitems',JSON.stringify(updatedCart));
    }

    const handelSub = (name,quantity)=>{
      if(quantity===1){
        let filterData = (cartinfo.filter((x)=>x.name!=name))
        setCartInfo(filterData);
        localStorage.setItem('cartitems',JSON.stringify(filterData));
        return ;
      }
      const updatedinfo = cartinfo.map((item)=>
        item.name === name ? {...item, quantity: item.quantity - 1} : item
      )
      setCartInfo(updatedinfo);
      localStorage.setItem('cartitems',JSON.stringify(updatedinfo));
    }

  return (
    <div className='fixed top-[5rem] right-5 z-20 bg-yellow-300'>
      {
        cartinfo.map((x)=>{
          total+=x.price*x.quantity
          return (
            <div className='flex'>
              <h1>{x.name}</h1>
              <img className='w-10' src={x.url} />
              <span
                onClick={()=>{
                  handelAddMore(x.name);  
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <h1>{x.price*x.quantity}</h1>
              <span
                onClick={()=>{
                  handelSub(x.name,x.quantity);  
                }}
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </span>
            </div>
          )
        })
      }
      {
        total?
        <div>total: {total}</div>
        :
        <h1>ntg in the cart</h1>
      }
    </div>
  )
}

export default Cart
import React from 'react'
import CartContext from '../utils/CartContext'

import { useContext } from 'react'

const Cart = () => {
    const {cartinfo,setCartInfo} = useContext(CartContext)
  return (
    <div className='absolute top-0 right-5'>
      {
        cartinfo.map((x)=>{
          return (
            <div className='flex'>
              <h1>{x.name}</h1>
              <img className='w-10' src={x.url} />
              <h1>{x.price*x.quantity}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
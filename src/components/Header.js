import React,{useContext, useState} from 'react'

import CartContext from '../utils/CartContext'
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const [cartvisible,setCartVisible] = useState();
  return (
    <div className='flex w-full justify-between gap-6 p-4 fixed z-10 bg-slate-700'>
      <Link to='/'>
        <div>Home</div>
      </Link>

      <div className='flex gap-4'>
      <div
        onClick={()=>{
          setCartVisible(!cartvisible);
        }}
        className='hover:cursor-pointer'
      >Cart</div>
      {
        cartvisible?<Cart /> :""
      }
      <Link to='/checkout' >
        <div>
          Checkout
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Header
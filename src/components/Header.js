import React,{useContext} from 'react'

import CartContext from '../utils/CartContext'
import { Link } from 'react-router-dom';

const Header = () => {
    const {cartinfo,setCartInfo} = useContext(CartContext);

  return (
    <div>
      <Link to='/cart'>
        cart
      </Link>
    </div>
  )
}

export default Header
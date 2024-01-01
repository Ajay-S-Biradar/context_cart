import React from 'react'
import data from '../utils/data.json'
import { useContext } from 'react'

import Card from './Card'
import CartContext from '../utils/CartContext'

const Body = () => {
  const {cartinfo,setCartInfo} = useContext(CartContext);
  return (
    <div className='flex flex-wrap justify-around'>
        {
            data.map(x=>{
                return <Card info={x} />
            })
        }
    </div>
  )
}

export default Body
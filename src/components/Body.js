import React from 'react'
import data from '../utils/data.json'
import { useContext } from 'react'

import Card from './Card'
import CartContext from '../utils/CartContext'

const Body = () => {
  return (
    <div className='flex flex-wrap justify-around relative top-[5rem]'>
        {
            data.map(x=>{
                return <Card info={x} />
            })
        }
    </div>
  )
}

export default Body
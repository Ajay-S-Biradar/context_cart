  import React from 'react'
  import { useContext } from 'react'

  import CartContext from '../utils/CartContext'

  const Card = (info) => {
    const {cartinfo,setCartInfo} = useContext(CartContext);

    const handelRemove = async (name)=>{
      let filterData = (cartinfo.filter((x)=>x.name!=name))
      setCartInfo(filterData);
      localStorage.setItem('cartitems',JSON.stringify(filterData));
    }

    const handelAddToCart = (data)=>{
      const itemExists = cartinfo.some((item) => item.name === data.name);
      
    if (itemExists) {
      const updatedCart = cartinfo.map((item) =>
        item.name === data.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartInfo(updatedCart);
      localStorage.setItem('cartitems',JSON.stringify(updatedCart));
    }
    else {
      const newItem = {
        name: data.name,
        price: data.price,
        quantity: 1,
        url: data.url,
      };
      const addnew = ([...cartinfo, newItem]);
      setCartInfo(addnew);
      localStorage.setItem('cartitems',JSON.stringify(addnew));
    }
  }
    return (
      <div className='flex flex-col w-96 p-1 m-1' key={info.info.id}>
          <img className='w-60 h-80 object-fill' src={info.info.url} alt="Description" />    
          <h1>{info.info.name}</h1>
          <h1>{info.info.price}</h1>
          <button
            onClick={(()=>{
              const item = {
                name:info.info.name,
                price:info.info.price,
                quantity:1,
                url:info.info.url
              }
              handelAddToCart(item);
            })}
          >add</button>
          <button
            onClick={()=>{
              handelRemove(info.info.name);
            }}
          >
            remove
          </button>
        </div>
    )
  }

  export default Card
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Cart from './Cart';
import CartContext from '../utils/CartContext';
import Checkout from './Checkout';

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () =>{
    const [cartinfo,setCartInfo] = useState([]);
    useEffect(() => {
        const storedCartInfo = JSON.parse(localStorage.getItem('cartitems'));
        setCartInfo(storedCartInfo || []);
    }, []);
    return (
        <CartContext.Provider 
            value={{
                cartinfo:cartinfo,
                setCartInfo:setCartInfo,
            }}
        >
            <Header />
            <Outlet />
            <Footer />
        </CartContext.Provider>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body />
            }
        ]
    },
    {
        path:'/checkout',
        element:<Checkout />
    }
])

root.render(<RouterProvider router={AppRouter} />)
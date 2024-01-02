import CartContext from "../utils/CartContext"
import { useContext } from "react"

const Checkout = () => {
    const {cartinfo,setCartInfo} = useContext(CartContext);
  return (
    <div>
        Checkout
    </div>
  )
}

export default Checkout
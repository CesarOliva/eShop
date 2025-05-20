import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/subtotal";
import { useStateValue } from "../stateProvider"

function Checkout() {
  const [{cart} ] = useStateValue();
  return (
    <div className="checkout">
        <div className="left">
            <img src="/Images/advertisment.png" alt="Advertisment" className="ad" />
            <div className="cart">
                <h2>Your cart</h2>
                {cart.map(item => (
                  <CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    rating = {item.rating}
                    img = {item.img}
                  />
                ))}
            </div>
        </div>
        <div className="right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
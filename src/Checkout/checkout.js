import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/subtotal";

function Checkout() {
  return (
    <div className="checkout">
        <div className="left">
            <img src="/Images/advertisment.png" alt="Advertisment" className="ad" />
            <div className="cart">
                <h2>Your cart</h2>
                <CheckoutProduct id="1" title="Laptop Games Intel N150 16gb Ram 512gb Ssd 18.5'' Fhd Win 11" price={348.6} rating={4} 
                img="/Images/laptop.webp"/>
                <CheckoutProduct id="1" title="Laptop Games Intel N150 16gb Ram 512gb Ssd 18.5'' Fhd Win 11" price={348.6} rating={4} 
                img="/Images/laptop.webp"/>
            </div>
        </div>
        <div className="right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
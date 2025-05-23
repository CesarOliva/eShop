import "./CheckoutProduct.css";
import { useStateValue } from "../../stateProvider";

function CheckoutProduct({id, title, price, rating, img}) {
  const [, dispatch] = useStateValue();

  const removeFromCart = () =>{
    dispatch({
      //To use like switch
      type: "removeFromCart",
      id: id
    })
  }

  return (
    <div className="checkoutProduct">
        <img src={img} alt="Product"/>

        <div className="info">
            <h4>{title}</h4>
            <p className="price">${price}</p>
            <p className="rating">{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}</p>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      
    </div>
  )
}

export default CheckoutProduct
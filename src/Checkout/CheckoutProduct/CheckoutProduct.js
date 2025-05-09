import "./CheckoutProduct.css";

function CheckoutProduct({title, price, rating, img}) {
  return (
    <div className="checkoutProduct">
        <img src={img} alt="Product"/>

        <div className="info">
            <h4>{title}</h4>
            <p className="price">${price}</p>
            <p className="rating">{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}</p>
            <button>Remove from Cart</button>
        </div>
      
    </div>
  )
}

export default CheckoutProduct
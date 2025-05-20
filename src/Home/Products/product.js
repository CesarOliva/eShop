import "./product.css"
import { useStateValue } from "../../stateProvider";

//Function with propts
function Product({id, title, price, rating, img}) {

  const [, dispatch] = useStateValue();

  const addToCart = () =>{
    dispatch({
      //To use like switch
      type: "addToCart",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img
      }
    })
  }

  return (
    <div className="product">
      <div className="info">
          <h4>{title}</h4>
          <p className="price">${price}</p>
          <span className="rating">{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}</span>
      </div>
      <img src={img} alt="Product"/>
      
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
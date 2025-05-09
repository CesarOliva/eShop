import "./product.css"

//Function with propts
function Product({id, title, price, rating, img}) {
  return (
    <div className="product">
      <div className="info">
          <h4>{title}</h4>
          <p className="price">${price}</p>
          <p className="rating">{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}</p>
      </div>
      <img src={img} alt="Product"/>
      
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
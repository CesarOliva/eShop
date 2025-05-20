//Imports
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

//Header function
function Header() {
  const [{ cart }] = useStateValue();

  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
        <div className="logo">
            <StoreIcon fontSize="large" className="image"/>        
            <h2>eShop</h2>
        </div>
      </Link>
      
      <div className="search">
          <input type="text" className="searchInput"/>
          <SearchIcon fontSize="large" className="icon"/>
      </div>

      <div className="navigation">
        <div className="item">
          <span className="LineOne">Hello Guest</span>
          <span className="LineTwo">Sign In</span>
        </div>
        <div className="item">
          <span className="LineOne">Your</span>
          <span className="LineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration: "none"}}>
          <div className="item itemCart">
            <ShoppingCartIcon fontSize="large" className="cart"/>
            <span className="LineTwo cartCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
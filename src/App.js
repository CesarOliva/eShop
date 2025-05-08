import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

//Main function
function App() {
  return (
    <div className='App'>
      <div className="logo">
        <StoreIcon fontSize="large" className="image"/>        
        <h2>eShop</h2>
      </div>

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
        <div className="item">
          <ShoppingCartIcon fontSize="large"/>
          <span className="LineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
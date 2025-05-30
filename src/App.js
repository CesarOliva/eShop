import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header/header';
import Home from './Home/home'
import LogIn from './LogIn/LogIn'
import Checkout from './Checkout/checkout';

//Main function
function App() {
  return (
    //Components of the app
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/login" element={<><LogIn/></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
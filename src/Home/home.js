import "./home.css";
import Product from "./Products/product";

function Home() {
  return (
    <div className="home">
        <div className="container">
            <img src="/Images/ecommerce.jpg" alt="Background main" className="img"/>

            <div className="row">
                <Product id="1" title="Laptop Games Intel N150 16gb Ram 512gb Ssd 18.5'' Fhd Win 11" price={348.6} rating={4} 
                img="/Images/laptop.webp"/>
                <Product id="2" title="Samsung Galaxy S24 Ultra 5G Dual SIM 256 GB amarillo titanio 12 GB RAM" price={849.45} rating={5} 
                img="/Images/s24.webp"/>
            </div>
            <div className="row">
                <Product id="3" title="Apple iPhone 16e (128 GB) - Blanco" price={624.95} rating={5} 
                img="/Images/iphone16.webp"/>
                <Product id="4" title="Reloj Garmin Forerunner 165 Amoled Black/slate 43mm Caja Negro Correa Negro Bisel Negro" price={219.95} rating={5}
                img="/Images/reloj.webp"/>
                <Product id="5" title="Audífonos Motorola Buds Azul Oscuro" price={29.5} rating={4} 
                img="Images/audifonos.webp"/>
            </div>
            <div className="row">
                <Product id="6" title="Samsung Tv QN55Q65DAFXZX Smart 4k Qled 55" price={500} rating={5} 
                img="Images/tele.webp"/>
            </div>
        </div>
    </div>
  )
}

export default Home
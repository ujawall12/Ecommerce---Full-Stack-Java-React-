import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/component/navigation/Navigation";
import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/component/footer/Footer";
import Product from "./customer/component/product/Product";

function App() {
  return (
      <div className="">
          <Navigation />
          <div>
              {/*<HomePage />*/}
              <Product/>
          </div>
          <Footer />
      </div>
  )
}

export default App;

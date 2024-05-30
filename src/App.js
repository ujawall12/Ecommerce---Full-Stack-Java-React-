import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/component/navigation/Navigation";
import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/component/footer/Footer";

function App() {
  return (
      <div className="">
          <Navigation />
          <div>
              <HomePage />
          </div>
          <Footer />
      </div>
  )
}

export default App;

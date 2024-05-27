import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/component/navigation/Navigation";
import HomePage from "./customer/component/pages/HomePage";

function App() {
  return (
      <div className="">
          <Navigation />
          <div>
              <HomePage />
          </div>
      </div>
  )
}

export default App;

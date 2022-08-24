import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Ships from "./components/Navbar/Ships";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return <div className="App">
    <Ships/>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
  </div>;
}

export default App;

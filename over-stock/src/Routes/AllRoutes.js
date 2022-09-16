import {Routes,Route} from "react-router-dom"
import Account from "./Account";
import Bedding from "./Bedding";
import Cart from "./Cart";
import Decor from "./Decor";
import Furniture from "./Furniture";
import Home from "./Home";
import HomeImprovement from "./HomeImprovement";
import Ideas from "./Ideas";
import Kids from "./Kids";
import Kitchen from "./Kitchen";
import Lighting from "./Lighting";
import Lists from "./Lists";
import More from "./More";
import Outdoor from "./Outdoor";
import ProductPage from "./ProductPage";
import Rugs from "./Rugs";
import Sales from "./Sales";

export default function AllRoutes() {
  return (
    <div style={{width:"90%",margin:"auto"}} > 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productpage" element={<ProductPage/>} />
        <Route path="/bedding" element={<Furniture/>} />
        <Route path="/decor" element={<Furniture/>} />
        <Route path="/furniture" element={<Furniture/>} />
        <Route path="/homeimprovement" element={<Furniture/>} />
        <Route path="/ideas" element={<Furniture/>} />
        <Route path="/kids" element={<Furniture/>} />
        <Route path="/kitchen" element={<Furniture/>} />
        <Route path="/lighting" element={<Furniture/>} />
        <Route path="/more" element={<More/>} />
        <Route path="/outdoor" element={<Furniture/>} />
        <Route path="/rugs" element={<Furniture/>}/>
        <Route path="/sales" element={<Furniture/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/lists" element={<Lists/>} />

      </Routes>
    </div>
  );
}

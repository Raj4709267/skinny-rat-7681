import {Routes,Route} from "react-router-dom"
import Bedding from "./Bedding";
import Decor from "./Decor";
import Furniture from "./Furniture";
import Home from "./Home";
import HomeImprovement from "./HomeImprovement";
import Ideas from "./Ideas";
import Kids from "./Kids";
import Kitchen from "./Kitchen";
import Lighting from "./Lighting";
import More from "./More";
import Outdoor from "./Outdoor";
import Rugs from "./Rugs";
import Sales from "./Sales";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bedding" element={<Bedding/>} />
        <Route path="/decor" element={<Decor/>} />
        <Route path="/furniture" element={<Furniture/>} />
        <Route path="/homeimprovement" element={<HomeImprovement/>} />
        <Route path="/ideas" element={<Ideas/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/kitchen" element={<Kitchen/>} />
        <Route path="/lighting" element={<Lighting/>} />
        <Route path="/more" element={<More/>} />
        <Route path="/outdoor" element={<Outdoor/>} />
        <Route path="/rugs" element={<Rugs/>}/>
        <Route path="/sales" element={<Sales/>} />
      </Routes>
    </div>
  );
}

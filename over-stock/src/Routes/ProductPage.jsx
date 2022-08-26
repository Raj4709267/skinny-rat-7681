import React from "react";
import ProductListing from "../components/ProductPage/ProductListing";

const data = [
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/47c9ae93df558cc6a7214693e20c3b81a9dd4523/Futzca-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise%2C-Modern-Linen-Fabric-L-Shaped-Couch-for-Small-Space.jpg?imwidth=480&impolicy=medium",
    p1: "Starting at INR 49161.14",
    p2: " Futzca Modern L-shaped Compact Convertible Sectional Sofa w/Reversible Chaise",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/10184613/Jaxx-Zipline-Queen-size-Convertible-Sleeper-Loveseat-and-Ottomans-Bed-8a51de72-6fd6-44ef-a536-8a24b970055d_600.jpg?imwidth=480&impolicy=medium",
    p1: "Sale Starts at INR 64908.97",
    p2: "Jaxx Zipline Convertible Queen-size Sleeper Loveseat and Ottoman Set",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/16883c1738b9dc9fe7ef24cdca00859a85404f61/Three-Seats-Without-Chaise-Concubine-Solid-Wood-Frame-Sofa.jpg?imwidth=480&impolicy=medium",
    p1: "Starting at INR 42680.02",
    p2: "Three Seats Without Chaise Concubine Solid Wood Frame Sofa",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/696a26f965a1db3bf2c6b1db928a2931f0ad78d4/Rosevera-Bjorn-Chesterfield-Settee.jpg?imwidth=480&impolicy=medium",
    p1: "Sale Starts at INR 33508.33 ",
    p2: "Rosevera Bjorn Chesterfield Settee",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/f0d9c7ceb30547b56a59d09e94fa32585ca0db92/Bobran-Modern-Velvet-3-Seater-Sofa-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
    p1: "Sale Starts at INR 55959.28",
    p2: "Bobran Modern Velvet 3-seat Sofa by Christopher Knight Home - 30.00 D x 83.25 W x 30.25 H",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/530aa0e7e8858f8aeba6704b30f1014e6c6191c8/Serta-Copenhagen-61%22-Loveseat-for-Two-People%2C-Pillowed-Back-Cushions-and-Rounded-Arms%2C-Durable-Modern-Upholstered-Fabric.jpg?imwidth=480&impolicy=medium",
    p1: "Starting at INR 46328.96",
    p2: "Serta Copenhagen 61 Loveseat for Two People, Pillowed Back Cushions and Rounded Arms, Durable Modern Upholstered",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/a18b85df4e04498e02ed96ef472094a97ce01191/Linen-Solid-Wood-Legs-Loveseat.jpg?imwidth=480&impolicy=medium",
    p1: "Starting at INR 29141.29",
    p2: "Linen Solid Wood Legs Loveseat",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/456eefc6f57dc82f2fc295518f0752f816876bfe/Morden-Fort-Couches-for-Living-Room%2C-Sofas-for-Living-Room-Furniture-Sets%2C-Sofa%2C-Fabric%2C-Velvet.jpg?imwidth=480&impolicy=medium",
    p1: "Sale Starts at INR 74893.77",
    p2: "Morden Fort Tufted Velvet Upholstered Chesterfield Sofa",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/8ca26cdda8e84d66bdeb5cd266e99bd55291eea8/Square-Arms-Upholstered-Fabric-Sofa-with-Pillows.jpg?imwidth=480&impolicy=medium",
    p1: "Sale Starts at INR 28795.03",
    p2: "Morden Loveseat Square Arms Upholstered Fabric Sofa with Pillows",
  },
];

function ProductPage() {
  return (
    <div>
      <ProductListing data={data} />
    </div>
  );
}

export default ProductPage;

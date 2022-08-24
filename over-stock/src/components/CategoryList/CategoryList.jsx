import React from "react";
import Listing from "./Listing";

const data=[
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
        name:"Furniture"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
        name:"Area Rugs"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
        name:"Bedding"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
        name:"Home Decor"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
        name:"Window Treatments"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
        name:"Kitchen"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",
        name:"Outdoor"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
        name:"Home Improvement"
    },{
        img:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
        name:"Storage"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
        name:"Mattresses"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
        name:"Lighting"
    },
    {
        img:"https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
        name:"Shop All Deals"
    },
    
]

function CategoryList() {
  return (
    <div>
        <Listing data={data} heading={"Fresh Finds In Each Category"} />
    </div>
  );
}

export default CategoryList;

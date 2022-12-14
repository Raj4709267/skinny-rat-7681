import { Heading } from "@chakra-ui/react";
import React from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import FirstImage from "../components/Home/FirstImage";
import LimitedDeals from "../components/Home/LimitedDeals";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider/Slider2";
import TrandingSearches from "../components/TrandingSearches/TrandingSearches";
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <FirstImage
        img={"https://relaxed-quokka-e8fd10.netlify.app/firstImage.png"}
      />
      <LimitedDeals />
      <FirstImage
        img={
          "https://superb-marzipan-2f8350.netlify.app/Screenshot%202022-08-24%20165807.png"
        }
      />
      <CategoryList />
      <Heading textAlign={"center"} margin="50px">
        Summer Styles for Every Budget
      </Heading>
      <Slider />
      <FirstImage
        img={
          "https://superb-marzipan-2f8350.netlify.app/Screenshot%202022-08-24%20165905.png"
        }
      />
      <Heading textAlign={"center"} margin="50px">
        Overstock Featured Brands
      </Heading>
        <Slider2/>
      <FirstImage
        img={
          "https://curious-daffodil-dfbaae.netlify.app/Screenshot%202022-08-25%20071637.png"
        }
      />
      <TrandingSearches/>
    </div>
  );
}

export default Home;

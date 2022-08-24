import React from 'react'
import CategoryList from '../components/CategoryList/CategoryList'
import FirstImage from '../components/Home/FirstImage'
import LimitedDeals from '../components/Home/LimitedDeals'
// import { Link } from 'react-router-dom'


function Home() {

 

  return (
    <div>
      <FirstImage img={"https://relaxed-quokka-e8fd10.netlify.app/firstImage.png"} />
      <LimitedDeals/>
      <FirstImage img={"https://superb-marzipan-2f8350.netlify.app/Screenshot%202022-08-24%20165807.png"} />
      <CategoryList/>
    </div>
  )
}

export default Home
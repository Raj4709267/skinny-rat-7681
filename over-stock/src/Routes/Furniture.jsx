import { Heading } from '@chakra-ui/react'
import React from 'react'
import Top from '../components/Menu/Top'

const topData=[
  {
    name:"Living Room Furiture"
  },
  {
    name:"Dining Room Furniture"
  },
  {
    name:"Bedroom Furniture"
  },
  {
    name:"Patio Furniture"
  },
  {
    name:"Kitchen Furniture"
  },
  {
    name:"Home Office Furniture"
  },
  {
    name:"Small Space Furniture"
  },
  {
    name:"Bathroom Furniture"
  },
  {
    name:"Mattresses"
  },
  {
    name:"Recreation Room"
  },
  {
    name:"Kids & Toddler Furniture"
  },
  {
    name:"Home Gym"
  },
 
]
const topImgs=[
  {
    bigImage:"https://ak1.ostkcdn.com/img/mxc/08222022_Desktop_Furniture_WalkerEdison.jpg?imwidth=680"
  },
  {
    small1:"https://glistening-cobbler-e1d353.netlify.app/3.png"
  },
  {
    small2:"https://glistening-cobbler-e1d353.netlify.app/2.png"
  }
]



function Furniture() {
  return (
    <div>
      <Heading  margin="30px" marginLeft={"0px"}>
        Furniture
      </Heading>
      <Top topData={topData} topImgs={topImgs} />
    </div>
  )
}

export default Furniture
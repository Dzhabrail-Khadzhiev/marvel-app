import React from 'react'
import HeaderRandom from './HeaderRandom'
import Hero from './Hero'
import asset from "../Images/bg-asset.png";


const Home = () => {
  return (
    <div>
      <HeaderRandom/>
      <Hero/>
      <div className="asset-image">
          <img src={asset} alt="" />
        </div>
    </div>
  )
}

export default Home
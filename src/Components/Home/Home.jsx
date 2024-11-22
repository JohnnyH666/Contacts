/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className='home container'>
      <Navbar/>
      <div className='home-text'>
          <h1>We ensure better experienece for every customer</h1>
          <p>Our simplify experience management with our groundbreaking, AI-driven platform is designed empower the voice of customer</p>
          <Button variant="contained">Explore more</Button>
      </div>
      
    </div>
  )
}

export default Home

import React from 'react'
import './Home.css'
import vc from '../assets/vc.jpg'
import Slider from './Slider'

export default function Home() {
  return (
    <>
    <div className="title">
      <div className="new-arr">
        <h2>NEW ARRIVALS</h2>
        <p>Choose like a pro from our first new spring 2022 arrivals.</p>
        <button className="btn-men">Shop Men's</button>
        <button className="btn-wmen">Shop Women's</button>
      </div>
      <img src={vc} 
      className="vcimg"
      alt= "vince carter image"/>
      <Slider/>
    </div>
    </>
  )
}

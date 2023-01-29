import React from 'react'
import {Link}from "react-router-dom"
import '../styles/HotAccessoriesMenu.css'
const HotAccessoriesMenu = () => {
  return (
    <div className ='HotAccessoriesMenu'>
    <Link className="HotAccessoriesLink"  to="/music">Snacks & Branded Foods</Link>
       <Link className="HotAccessoriesLink" to="/smartdevice">Smart Device</Link>
       <Link className="HotAccessoriesLink" to="/home">Bag</Link>
       <Link className="HotAccessoriesLink" to="/lifestyle"> Power Bank</Link>
       <Link className="HotAccessoriesLink" to="/mobileAccessories">Battery</Link>

      
 </div>
  )
}

export default HotAccessoriesMenu

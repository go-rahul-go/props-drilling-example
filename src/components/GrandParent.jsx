import React from 'react'
import Parent from './Parent';
import "./components.css";
import { BsArrowRightCircle } from "react-icons/bs";
const GrandParent = () => {
  
  return (
    <div className="container">
    <div className='grand-parent'>
        <p>My grand child need <span>100 $</span></p>
    </div>
    <BsArrowRightCircle className="arrow"/>
    <Parent dollar={"100"}/>
    </div>
  )
}

export default GrandParent;
import React from 'react'
import GrandChild from './GrandChild';
import "./components.css";
import { BsArrowRightCircle } from "react-icons/bs";
const Parent = ({dollar}) => {
  return (
    <>
    <div className="parent">
        <p>I am a parent</p>
        <p>My father gave <span>{dollar} $</span></p>
        <p>Now, i will pass <span>{dollar} $</span> to my child</p>
    </div>
    <BsArrowRightCircle className='arrow'/>
    <GrandChild dollar={dollar}/>
    </>
  )
}

export default Parent;
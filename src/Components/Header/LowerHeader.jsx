import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import './header.css'


function Lowerheader() {
  return (
    <div className="Lowerheader_container">
    <ul>
        <li>
        <AiOutlineMenu />
        <p>All</p>
        </li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registory</li>
        <li>Gift Cards</li>
        <li>Sell</li>
    </ul>
    </div>
  )
}

export default Lowerheader
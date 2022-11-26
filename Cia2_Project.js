import React, { useState } from 'react'
import './Cia2_Project.css'
export default function Cia2Project() {

    const[color,setcolor]=useState("lime");
  return (
    <div className='main' style={{"backgroundColor":color , opacity:0.7}}>
        <h3>Color changer</h3>
        <select name="colorchanger" id="dropdown" onChange={e=>setcolor(e.target.value)} style={{"backgroundColor":color, opacity:1}}>
            <option value={"lime"}>Lime</option>
            <option value={"lavender"}>Lanvender</option>
            <option value={"crimson"}>Crimson</option>
            <option value={"darkblue"}>Darkblue</option>
            <option value={"teal"}>Teal</option>
            <option value={"rebeccapurple"}>Rebecca Purple</option>
            <option value={"ghostwhite"}>Ghost White</option>
            <option value={"aquamarine"}>Aqua Marine</option>
            <option value={"brown"}>Brown</option>
        </select>
    </div>
  )
}

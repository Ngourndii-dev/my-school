import React, { useState } from 'react'
export default function Compteur() {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  return (
    <div>
        <button onClick={increment}></button>
        <p>{count}</p>
    </div>
  )
}

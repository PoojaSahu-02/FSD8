import React from 'react'
import { useState } from 'react'
const Food = () => {
    let[state,setState]=useState("I'm Hungry")
    let btnHandler = ()=>{
        setState("I'm Full")
    }
  return (
    <div>
    <h1 className=''>{state}</h1>
    <button onClick={btnHandler} className='border rounded p-2 cursor-pointer bg-gray-300 m-4'>Food</button>
    </div>
  )
}
export default Food

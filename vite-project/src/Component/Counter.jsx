import React from 'react'
import { useState } from 'react'
const Counter = () => {
   let [count,setCount] =  useState(0)
   let btnHandler = ()=>{
        setCount(count+1)
      }
  return (
    <div>
      <button onClick={btnHandler}>Count = {count}</button>
    </div>
  )
}

export default Counter

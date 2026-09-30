import React from 'react'
import C from './C'
const B = ({data1}) => {
  return (
    <div>
         <h1>B component </h1>
      <C data2 = {data1}></C>
    </div>
  )
}

export default B

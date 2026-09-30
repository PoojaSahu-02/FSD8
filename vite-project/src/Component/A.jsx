import React from 'react'
import B from './B'
const A = ({data}) => {
  return (
    <div>
        <h1>A component</h1>
      <B data1 = {data}></B>
    </div>
  )
}
export default A

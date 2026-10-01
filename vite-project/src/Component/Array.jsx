import React,{useState} from 'react'
const Array = () => {
    let [arr,setArr]  = useState([10,20,30,40,50])
    let btnHandler = ()=>{
       let nextele = arr[arr.length-1]+10
        setArr(()=>[...arr,nextele])
    }
  return (
    <div>
         <button onClick={btnHandler}>Add</button>
        {
            arr.map((ele,ind)=>{
                return(
                    <div key={ind}>
                    <h1>{ele}</h1>
                    </div>
                )
    })}
    </div>
  )}
export default Array

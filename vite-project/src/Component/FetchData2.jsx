import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const FetchData2 = () => {

    let [content,setContent]  = useState({})
    let [id,setId]  = useState(null)
    let [btn,setBtn]  = useState(null)

    let getData = async()=>{
        let response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        // console.log(response.data)
        setContent(response.data)
    }
    let inputHandler = (e)=>{
        setId(e.target.value)
        // console.log(e.target.value)
    }
    let btnHandler = (e)=>{
        e.preventDefault()
        setBtn(id)
    }

    useEffect(()=>{
        getData()
    },[btn])

  return (
    <div>
        <form action="">
            <input type="text" placeholder='Enter id' value={id} onChange={inputHandler}/>
            <button onClick={btnHandler}>Get</button>
        </form>
      <img src={content.url} alt="" />
    </div>
  )
}

export default FetchData2

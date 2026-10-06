import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const FetchData1 = () => {

    let [content,setContent] = useState([])

    async function getData(){
        let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        console.log(response.data)
        setContent(response.data)
        }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
      {
        content.map((ele)=>{
            return(
                <>
                <img src={ele.url} alt="" />
                </>
            )
        })
      }
    </div>
  )
}

export default FetchData1


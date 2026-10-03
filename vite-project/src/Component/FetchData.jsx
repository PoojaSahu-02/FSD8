import React from 'react'
import { useState,useEffect } from 'react'

const FetchData = () => {

   let[content,setContent]= useState([])

   let getData = async()=>{
                let response = await fetch('https://jsonplaceholder.typicode.com/comments')
                let data =  await response.json()
                console.log(data)
                setContent(data)
   }

    useEffect(()=>{
        try{
            getData()
        }
        catch(err){
            console.log(err)
        }
    },[])
    
  return (
    <div>
      {
        content.slice(10,15).map((ele)=>{
            return(
                <>
                <h1>{ele.email}</h1>
                </>
            )
        })
      }
    </div>
  )
}

export default FetchData

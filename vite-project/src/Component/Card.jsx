import React,{useState} from 'react'
import userPost from '../userPost.json'
const Card = () => {
   let[post,setPost] =  useState(userPost)
  return (
    <div className='flex justify-around flex-wrap'>
      {
        post.map((ele)=>{
            return(
                <div key={ele.id} className='border rounded h-50 w-60 m-5 p-2 overflow-hidden bg-black text-white'>
                    <h2>{ele.id}</h2>
                    <p>Title = {ele.title}</p>
                    <p>Body = {ele.body}</p>
                </div>
            )
        })
      }
    </div>
  )
}
export default Card

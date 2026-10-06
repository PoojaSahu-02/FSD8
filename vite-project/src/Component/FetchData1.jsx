// import React from 'react'
// import { useState,useEffect } from 'react'
// import axios from 'axios'
// const FetchData1 = () => {

//     let [content,setContent] = useState([])

//     async function getData(){
//         let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
//         console.log(response.data)
//         setContent(response.data)
//         }

//     useEffect(()=>{
//         getData()
//     },[])

//   return (
//     <div>
//       {
//         content.map((ele)=>{
//             return(
//                 <>
//                 <img src={ele.url} alt="" />
//                 </>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default FetchData1











import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const FetchData1 = () => {

    let [content,setContent] = useState({})
    let [id,setId] = useState(null)
    let [btn,setBtn] = useState(null)

   let btnHandler = (e)=>{
    e.preventDefault()
  setBtn(id)
    }
    async function getData(){
        let response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        console.log(response.data)
        setContent(response.data)
        }

    useEffect(()=>{
        getData()
    },[btn])

  return (
    <div>
    
                <>
                <form action="">
                  <input type="text" placeholder='Enter ID' onChange={(e)=>{setId(e.target.value)}}/>
                  <button onClick={btnHandler}>Get</button>
                </form>
                <img src={content.url} alt="" />
                </>
            
    </div>
  )
}

export default FetchData1


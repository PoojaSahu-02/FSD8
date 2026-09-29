let Props = ({data})=>{
    console.log(data)
    return(
        <div className="flex flex-wrap m-auto w-full gap-10 ">
        {data.map(({id,title,body})=>{
            return(
                <div className="border radius h-50 w-70 rounded-xl">
                    <h1>{id}</h1>
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
            )
        })}
        </div>
    )     
}
export default Props




// import React from 'react'
// const Props = ({users}) => {
//     console.log(users)
//   return (
//     <div>
//       {
//         users.map((ele)=>{
//             return(
//                 <div key={ele.contact} style={{border:"2px solid black",borderRadius:"5px",height:"200px",width:"300px"}}>
//                 <h1>{ele.name}</h1>
//                 <h2>{ele.age}</h2>
//                 <h2>{ele.email}</h2>
//                 <h2>{ele.contact}</h2>
//                 </div>
//             )
//         })
//       }
//     </div>
//   )
// }
// export default Props










// import React from 'react'
// const Props = ({obj}) => {
//     console.log(obj)
//   return (
//     <div>
//       <h1>{obj.username}</h1>
//       <h2>{obj.age}</h2>
//     </div>
//   )
// }
// export default Props








// import React from 'react'
// const Props = ({arr}) => {
//     console.log(arr[0])
//   return (
//     <div>
//       {/* <h1>{arr[0]}</h1> */}
//       {
//         arr.map((ele)=>{
//             return(
//                 <>
//                 <h1>{ele}</h1>
//                 </>
//             )
//         })
//       }
//     </div>
//   )
// }
// export default Props











//passing string as a prop
// import React from 'react'

// const Props = ({str}) => {
//   return (
//     <div>
//       <h1>{str}</h1>
//     </div>
//   )
// }

// export default Props




//Passing multiple number as a prop
// import React from 'react'

// const Props = ({num1,num2}) => {
//   return (
//     <div>
//       <h1>Passing props</h1>
//       <h2>{num1+num2}</h2>
//     </div>
//   )
// }

// export default Props






//Passing number as a prop
// import React from 'react'

// const Props = ({num}) => {
//   return (
//     <div>
//       <h1>Passing props</h1>
//       <h2>{num}</h2>
//     </div>
//   )
// }

// export default Props

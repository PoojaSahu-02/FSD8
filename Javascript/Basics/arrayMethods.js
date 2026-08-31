const arr = [11,22,33,44,55]

// for(let i = 0 ;i<arr.length;i++){
//     console.log(i,arr[i])
// }
// for(let i in arr){
//      console.log(i,arr[i])
// }
// for(let i of arr){
//      console.log(i)
// }

// let result = arr.forEach((ele)=>{
//     if(ele%2==0){
//         console.log(`${ele} is even`)
//     }
//     else{
//         console.log(`${ele} is odd`)
//     }
// // console.log(ele*ele)
// })
// console.log(result)

// let res = arr.map((ele)=>{
//     if(ele%2==0){
//         return `${ele} is even`
//     }
//     else{
//        return `${ele} is odd`
//     }
// // console.log(ele*ele)
// })
// console.log(res)

// let res = arr.some((ele)=>{
// if(ele%2==0){
//     return ele
// }
// })
// console.log(res)

// let res = arr.every((ele)=>{
// if(ele%2==0){
//     return ele
// }
// })
// console.log(res)

// let res = arr.filter((ele)=>{
// if(ele%2==0)
//     return ele
// })
// console.log(res)

let res = arr.map((ele)=>{
return ele*ele
})
console.log(res)
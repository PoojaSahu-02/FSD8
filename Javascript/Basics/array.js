// array - 
// array is a type of object 
// let arr = [10,20,30]
// console.log(typeof(arr))
// array is a reference type or non primitive tye
// eg arr store the reference or address

// array is hetrogeneous (can store diff datatypes)
// let brr = [10,'a',undefined,"hello",null,true,[1,2,3],{name:"john"}]
// console.log(brr)

// array is mutable (changeable)

// array is not fixed size can grow and shrink array
// array follows growable data structure

// array length = 
// console.log(brr.length)
// array index starts from 0
// last index = 
// console.log(brr.length -1)


// to check the variable array or not
// console.log(Array.isArray(brr)) //return true
// let a = null; // return false

// syntax - 
// Using direct literals
// let a = [1,"hii",true]

// Using new keyword or constructor function
// let size = Number(prompt("Enter size of array"))
// let b = new Array(size)
// console.log(size,typeof(size))
// b[0] = 10;
// b[1] = 20;
// b[2] = 30;
// console.log(b)


let brr = [10,'a',undefined,"hello",null,true,[1,2,3],{name:"john"}]

// for(let i = 0;i<brr.length;i++){
//     console.log(i,brr[i])
// }
// for(let i = 0;i<=brr.length-1;i++){
//     console.log(i,brr[i])
// }

// for(let i = brr.length-1;i>0;i--){
//     console.log(i,brr[i])
// }
// for(let i = 2;i<=6;i++){
//      console.log(i,brr[i])
// }

// for (let i in brr){
//     console.log(i,brr[i])
// }

// ES-6
// for (let value of brr){
//     console.log(value)
// }


// let size = Number(prompt("Enter size of array"))
// let b = new Array(size)
// for(let i = 0;i<size;i++){
//     b[i] = prompt("Enter element")
// }
// console.log(b)
// console.log(brr)
// brr.push(100,123,9846)
// console.log(brr)
// console.log(brr.pop())
// brr.unshift("new element")
// console.log(brr)
// brr.shift()
// brr.shift()
// brr.shift()
// console.log(brr)
// brr.splice(1,0,"good afternoon")
// console.log(brr)
// brr.reverse()
// console.log(brr)

// console.log(brr.join(" "))
let x = 10;
let y = 0
console.log(x&&y)
console.log(object)
//Normal Function
// function greet(){
//     console.log("Hello,Good Morning")
// }
// greet()
// greet()

// function expression or anonymous function
// let greet= function (){
//     console.log("Hello,Good Morning")
// }
// greet()

// function with parameter or parametrized function
// let sum= function (a,b){
//     console.log(`result =${a+b}`)
// }
// sum(3,5)

// // function with default parameter or default parametrized function
//  function sum(a=0,b=0,c=0){
//     console.log(a,b,c)
//     console.log(a+b+c)
// }
// sum(3,5)

// function with rest parameter or rest parametrized function
//  function sum(a=0,b=0,c=0,...d){
//     console.log(a,b,c,d)
//     console.log(a+b+c+d[2])
// }
// sum(3,5,10,20,30,40)

// passing array as an argument
// let arr = [1,2,3,4,5,6,7,8,9]
// function sumOfArray(a){
//     let sum = 0;
// for(let i = 0;i<=a.length-1;i++){
//    sum = sum+a[i]
// }
// return sum
// }
// let res = sumOfArray(arr)
// console.log(res)


// let arr = [1,2,3,4,5,6,7,8,9]
// function squareOfArray(a){
// for(let i = 0;i<=a.length-1;i++){
//  a[i] = a[i]*a[i]
// }
// return a
// }
// let res = squareOfArray(arr)
// console.log(res)


// let arr = [1,2,3,4,15,6,7,8,19]
// function highestOfArray(a){
//     let max = a[0]
// for(let i = 1;i<=a.length-1;i++){
//     if(max<a[i]){
//         max = a[i]
//     }
// }
// return max
// }
// let res = highestOfArray(arr)
// console.log(res)


// let arr = [1,2,3,4,15,6,7,8,19]
// function smallestOfArray(a){
//     let max = a[0]
// for(let i = 1;i<=a.length-1;i++){
//     if(max>a[i]){
//         max = a[i]
//     }
// }
// return max
// }
// let res = smallestOfArray(arr)
// console.log(res)

// let arr = [1,2,3,4,15,6,7,8,19]
// function countEven(a){
//     let even = 0;
// for(let i = 1;i<=a.length-1;i++){
//     if(a[i]%2){
//         even++;
//     }
// }
// return even
// }
// let res = countEven(arr)
// console.log(res)

// passing object as an argument
// let user = {name:"John",age:21}
// function  myDetails(obj){
//     console.log(`Name is ${obj.name} and age is ${obj.age}`)
// }
// myDetails(user)

// let users = [{name:"John",age:21},{name:"Dinga",age:22},{name:"Dingi",age:21}]
// function  myDetails(user){
//     for(let i in user){
//     console.log(`Name is ${user[i].name} and age is ${user[i].age}`)
//     }
// }
// myDetails(users)

// passing function as an argument
// callback function  = a function which is passed as an argument is called as callback function

// function greet(){
//     console.log("this function is passed as an argument")
// }
// function myFunc(callback){
// console.log("this is myFunc function")
// callback()
// }
// myFunc(greet)



// return type function or function with return statement
//  function sum(a=0,b=0,c=0,...d){
//     console.log(a,b,c,d)
//     return(a+b+c+d[2]);
// }
// // console.log(sum(3,5,10,20,30,40))
// let result = sum(3,5,10,20,30,40)
// console.log(result)




// function returning another function

// function myFunc(){
//         function greet(){
//             console.log("this is greet function")
//         }
// return greet;
// }
// let res = myFunc()
// res()
//Higher order function - 
// 1) a function which accept another function as a parameter
// 2) a function which return another funtion as return statement 
// 3) a function which accept a function and also return a function

// function hello(){
//     console.log("hello function")
// }
// function myFunc(callback){
//     console.log("myFunc function")
//     function greet(){
//         console.log("greet function")
//     }
//     callback();
//     return greet
// }
// let res = myFunc(hello)
// res();

// function inside function
// function outer(){
//     console.log("this is outer function")
//     function inner(){
//         console.log("this is inner function")
//     }
//     inner()
// }
// outer()

// Immediate invoke function expresion(IIFE)
// (function greet(){
//     console.log("hello")
// })()

// ES6 - Arrow function

// let greet = ()=>{
//     console.log("this is arrow function")
// }
// greet()

// when we have only one parameter then parenthesis () are optional
// let greet = username =>{
//     console.log(`welcome ${username}`)
// }
// greet("John")

// when we have only one statement inside function then curly braces {} are optional
// let greet = username =>console.log(`welcome ${username}`)
// greet("John")

// when we have only one statement which is return statement inside function then curly braces {} and return keyword are optional
let greet = username => {return `welcome ${username}`}
console.log(greet("John"))

let obj = {
    name:"john",
    age:21,
    "contact no":937476309,
    email:"john@gmail.com"
}
// console.log(obj)
// console.log(typeof(obj))
// console.log(obj.name)
// console.log(obj["contact no"])

// let user = new Object()
// // user.name  = "dinga"
// // user.age = 21
// let key = prompt("Enter key")
// let value = prompt("enter value")
// user[key] = value
// console.log(user)

// for(let key in obj){
//     console.log(key,obj[key])
// }
// for(let key of Object.keys(obj)){
//     console.log(key,obj[key])
// }

// object destructuring (ES6)

let firstname = obj.name
let age = obj.age
let contact = obj["contact no"]
let email = obj.email

// let {name,age,contact,email} = obj
// console.log(name,age,contact,email)

let {name:firstname,age,"contact no":contact,email} = obj
console.log(firstname,age,contact,email)
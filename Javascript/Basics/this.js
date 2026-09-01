// let user = {
//     name:"john",
//     greet:function (){
//         console.log(this)
//         console.log(`good morning ${this.name}` )
//     }
// }
// console.log(user.name)
// user.greet()

let user = {
    name:"john",
    greet: ()=>{
        console.log(this)
        console.log(`good morning ${name}` )
    }
}

console.log(user.name)
user.greet()
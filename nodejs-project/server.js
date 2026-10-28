const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000
const path = require('path')
const mongoose = require('mongoose')
app.use(express.static('public'))

// const middleware1 = (req,res,next)=>{
// console.log("this is middleware1");
// next()
// }
// const middleware2 = (req,res,next)=>{
// console.log("this is middleware2");
// next()
// }
// app.use(middleware1,middleware2)
// app.get('/',(req,res)=>{
// res.send("Hello")
// })
// app.get('/home',(req,res,next)=>{
//     console.log("middleware")
//     next()
// },(req,res)=>{
// res.send("home page")
// })
// app.get('/user/:id',(req,res)=>{
//     res.send(`user id  ${req.params.id}`)
// })
// app.get('/product',(req,res)=>{
//     res.send(`product name is ${req.query.prodname} and product price is ${req.query.price}`)
// })

let connectDB = async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/myDB")
    console.log("mongodb connected succesfully")
    }
    catch(err){
        console.log("connection failed!")
        process.exit(1)
    }
}
connectDB()






app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})



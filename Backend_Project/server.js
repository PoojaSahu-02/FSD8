const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

let connectDB = async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb is connected successfully!")
    }
    catch(err){
        console.log("Connection Failed!!")
        process.exit(1)
    }
}
connectDB()

let stuSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number
})

let student = mongoose.model("student",stuSchema)

app.use(express.json())
app.post('/createstudent',async(req,res)=>{
await student.create(req.body)
res.status(201).send("user created successfully")
})

app.get('/getallstudent',async(req,res)=>{
    let data = await student.find()
    res.status(200).send(data)
})

app.get('/getstudent/:id',async(req,res)=>{
    let data = await student.findById(req.params.id)
    res.status(200).send(data)
})
app.put('/updatestudent/:id',async(req,res)=>{
    let data = await student.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).send(data)
})
app.delete('/deletestudent/:id',async(req,res)=>{
     await student.findByIdAndDelete(req.params.id)
    res.status(200).send("Data deleted successfully")
})




app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
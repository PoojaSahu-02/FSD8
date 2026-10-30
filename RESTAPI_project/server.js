const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')
const studentRouter = require('./routes/studentRoutes')
const PORT = process.env.PORT || 5000

connectDB()

// mounting or route mount
app.use(express.json())
app.use('/api/v1',studentRouter)

// http://localhost:3000/api/v1/createstudent
// http://localhost:3000/api/v1/getallstudent
// http://localhost:3000/api/v1/getstudentbyid/id
// http://localhost:3000/api/v1/updatestudent/id
// http://localhost:3000/api/v1/deletestudent/id

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
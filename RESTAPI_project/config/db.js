const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB conection establish`)
    }
    catch(err){
        console.log('Connection Failed!!')
        process.exit(1)
    }
}

module.exports =  connectDB

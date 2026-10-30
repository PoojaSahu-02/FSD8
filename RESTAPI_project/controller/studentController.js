const student = require('../model/studentModel')

const createStudent = async(req,res)=>{
    try{
      let data = await student.create(req.body)
      res.status(201).json({
        success:true,
        message:"user created successfully",
        data
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}
const getAllStudent =async (req,res)=>{
try{
   let data =  await student.find()
   res.status(200).json({
    success:true,
    message:"All user fetched successfully",
    data

   })

}
catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
}

}
const getStudentById = async(req,res)=>{
try{
 let data = await student.findById(req.params.id)
 res.status(200).json({
    success:true,
    message:"user fetched successfully",
    data
 })
}
catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
}
}
const updateStudent = async(req,res)=>{
try{
let data = await student.findByIdAndUpdate(req.params.id,req.body)
 res.status(200).json({
    success:true,
    message:"user Updated successfully",
    data
 })
}
catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
}
}
const deleteStudent = async(req,res)=>{
try{
let data = await student.findByIdAndDelete(req.params.id)
 res.status(200).json({
    success:true,
    message:"user deleted successfully",
    data
 })
}
catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
}
}
module.exports = {createStudent,getAllStudent,getStudentById,updateStudent,deleteStudent}
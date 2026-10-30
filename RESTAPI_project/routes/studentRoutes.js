const express = require('express')
const router = express.Router()
const {createStudent,getAllStudent,getStudentById,updateStudent,deleteStudent} = require('../controller/studentController')
router.post('/createstudent',createStudent)
router.get('/getallstudent',getAllStudent)
router.get('/getstudentbyid/:id',getStudentById)
router.put('/updatestudent/:id',updateStudent)
router.delete('/deletestudent/:id',deleteStudent)

module.exports = router


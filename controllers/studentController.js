const students = require('../models/model')


//read
const readStudent = async(req,res)=>{
    try {
     const result = await students.find()   
     res.json(result)
 
    } catch (err) {
       res.status(500).json({message:err.message}) 
    }
 }



//create
 const createStudent = async(req,res)=>{
    const student = new students({

        name:req.body.name,
        rollno:req.body.rollno,
        city:req.body.city

    })

    try {
        const result = await student.save()
        res.status(201).json(result)
    } catch (err) {
        res.status(500).json({message:err.message}) 
    }
    
}


//to get one student
const readOneStudent = (req,res)=>{
    res.json(res.student)
}

//Update

const updateStudent = async(req,res)=>{
    if(req.body.name!=null){
        res.student.name = req.body.name
    }
   
    if(req.body.rollno!= null){
        res.student.rollno = req.body.rollno
    }

    if(req.body.city!= null){
        res.student.city = req.body.city
    }


    try {
        const updateStudent = await res.student.save()
        res.json(updateStudent)
    } catch (err) {
        res.status(500).json({message:err.message})  
    }

}


const deleteStudent = async(req,res)=>{
    try {
        await res.student.remove()
        res.json({message:"Student deleted Succesfully"})
    } catch (err) {
        res.status(500).json({message:err.message})  
    }
}









 module.exports = {readStudent,createStudent,readOneStudent,updateStudent,deleteStudent}
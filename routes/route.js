const express =  require("express")

const router = express.Router()

const students = require('../models/model')

const Controller = require('../controllers/studentController')


//middleware
const getOneStudent = async(req,res,next)=>{
    try {
        const student = await students.findById(req.params.id)
        if(student===null){
            return res.status(404).json({ message:"Can't find Student"})
        }

        res.student = student
        next()

    } catch (err) {
        res.status(500).json({message:err.message}) 
    }
}

//read
router.get('/',Controller.readStudent)



//create
router.post("/create",Controller.createStudent)



//get one student

router.get("/:id",getOneStudent,Controller.readOneStudent)

//update
router.patch('/update/:id',getOneStudent,Controller.updateStudent)

//Delete
router.delete('/delete/:id',getOneStudent,Controller.deleteStudent)





module.exports = router

const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    rollno:{
        type:Number,
        required:true
    },

    city:{
        type:String,
        require:true
    },

}) 

module.exports = mongoose.model("details",studentSchema)
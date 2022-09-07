
const express =  require("express")
const app = express()
const port = process.env.PORT || 3300
const mongoose = require('mongoose')
require('dotenv').config()

const students = require('./routes/route')




mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser:true}
)

const db = mongoose.connection
db.on('error',(err)=>{console.log(err)})
db.once('open',()=>console.log('connected to db'))

app.use(express.json())


app.use('/students', students)





app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})
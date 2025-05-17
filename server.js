const express=require('express')
const mongoose=require('mongoose')
const {createTask, getAllTask ,removeTask}=require("./CONTROLLERS/controllers")
const cors=require("cors")

// get mongo url from .env file 
require('dotenv').config()



// make app using express
const app=express()

// enables CORS for all domains
app.use(cors())


// parse json data
app.use(express.json())

// connect to mongoDB and process the mongo url
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("DB connected")
})
.catch((err)=>{
  console.log("error in connection",err)
})

// api to get all task from db
app.get('/getTask',getAllTask)

// api to post tsk in db
app.post("/createTask",createTask)

// api to remove the task 
app.delete("/removeTask/:id",removeTask)















// listen  server requests
const PORT=8000
app.listen(PORT,()=>console.log(`listening on port http://localhost:${PORT}`))
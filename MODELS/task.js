// create schema for mongoDB

const mongoose=require('mongoose')



// task schema ... how our task will get saved in data base
const taskSchema=mongoose.Schema({
   title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }

})


// export the schema to use as model
module.exports= mongoose.model("Tasks",taskSchema)
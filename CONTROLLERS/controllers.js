// controllers : CRUD logic for tasks


const Task = require('../MODELS/task');


// get task from db
const getAllTask = async (req, res) => {
    try {
        const task = await Task.find()
        await res.json(task)
    } catch (err) {
        console.log("error getting task")
        res.status(401).json({ "taskNo": "No task Found " })
    }
}

const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  try {
    const newTask = new Task({ title, description });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (err) {
    console.error("Error while creating task:", err);
    res.status(500).json({ error: "Server error while creating task" });
  }
};


const removeTask = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "Invalid task ID" });   // ← return
    }

    try {
        const deleted = await Task.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Task not found" }); // ← return
        }

        return res.json({ message: "Task deleted successfully" });    // ← return
    } catch (err) {
        console.error("Error while deleting", err);
        return res.status(500).json({ error: "Server error" });       // ← return
    }
}


const updateTask =async (req,res)=>{
  const id=req.params.id ;
  if(!id){
     return res.status(400).json({error:"invalid id"})
  }
  try{
    const task= await Task.findByIdAndUpdate(id,{
      completed:true,
    },
  {
    new:true // helps to return updated task 
  })
    res.status(200).json(task)
    console.log(task)
  }catch(err){
    res.status(400).json({error:"some error occured"})
  }
}

module.exports = { createTask, getAllTask, removeTask , updateTask}

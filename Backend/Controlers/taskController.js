const Router = require("express");
const TaskModel = require("../Modals/task.model");
const UserModel = require("../Modals/user.model");
const authentication  = require("../Middleware/authentication")
const task = Router();

task.get("/",authentication, async(req,res)=>{
    const {userId} = req.body
    const user = await UserModel.findOne({userId})
    
    const tasks = await TaskModel.find({userId})
    return res.send({tasks,lead:user.name})
})
task.post("/create",authentication,async(req,res)=>{
    const {creater,assignee,projectName,userId,taskName,taskStatus} = req.body;
    const user = await UserModel.findOne({userId})
    // Reviewed for: fw16_016 and fw17_0415: you can use creater from the req.body and don't need extra call to DB
    const task = new TaskModel({
        creater:user.name,assignee,projectName,userId,taskName,taskStatus
    })
    await task.save();
    if(task) return res.send({message : "task created successfully.",taskId:task._id}) 
    else return res.send({message : "Please fill all field."})       
})
task.patch("/update",authentication,async(req,res)=>{
    const toUpdate = req.body;
    console.log(toUpdate)
    try {
        const task =  await TaskModel.updateOne({_id:toUpdate._id},toUpdate)
       
        if(task) return res.send({message : "task updated successfully."}) 
        return res.send({message : "Unable to Update"}) 
    } catch (error) {
        return res.send({message : "Unable to Update"}) 
    }        
})
task.delete("/delete",async(req,res)=>{
    const id= req.body;
  
    try {
        const task =  await TaskModel.deleteOne(id)
        if(task) return res.send({message : "task deleted successfully."}) 
        return res.send({message : "Unable to Delete"}) 
    } catch (error) {
        return res.send({message : "Unable to Delete"}) 
    }        
})

module.exports = task

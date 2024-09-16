const express = require('express')
const authentication = require('../Middleware/authentication')
const ProjectModel = require('../Modals/project.model')
const projectController = express.Router()

// Reviewed for: fw16_117, fw16_016 and fw17_0415 - You can't send "You are not Authorized" in this route, you should send it middleware
// --------------------------------------------------------------------------------------------------->
projectController.get("/", authentication, async (req, res)=>{

    const {status} = req.query
    const {userId} = req.body
    if(status){
        const projects = await ProjectModel.find({userId,status})
        return res.send({
            message:"GET REQUEST SUCCESSFUL",
            projects
        })
    }
    else if(userId){
        const projects = await ProjectModel.find({userId})
        return res.send({
            message:"GET REQUEST SUCCESSFUL",
            projects
        })
    }
    else{
        res.send({message:"You are not Authorized"})

    }

})
// --------------------------------------------------------------------------------------------------->
projectController.post("/create", authentication, async(req, res)=>{
   // Reviewed for: fw16_117, fw16_016 and fw17_0415 - no need of await
    const new_project = await new ProjectModel({
        ...req.body,
    })
    new_project.save()
    res.send({message:"Created successfully",new_project})

})

// --------------------------------------------------------------------------------------------------->
projectController.delete("/delete/:projectId", authentication, async (req, res)=>{
    const {projectId} = req.params
    const {userId} = req.body
    // Reviewed for: fw16_117, fw16_016 and fw17_0415 - You can use findOneAndDelete({_id:projectId, userId})
    // Try to optimise calls to DB (They are expensive)
    const project = await ProjectModel.findOne({_id:projectId})
    if(project.userId === userId){
        const deleted_project = await ProjectModel.findOneAndDelete({_id:projectId})
        res.send({
            message:"Deleted Successfully",
            deleted_item:deleted_project
        })
    }
    else{
        res.send({message:"You are not authorized"})
    }
})
// --------------------------------------------------------------------------------------------------->
projectController.patch("/patch/:projectId", authentication, async (req, res)=>{
    const {projectId} = req.params
    const {userId} = req.body
    // Reviewed for: fw16_117, fw16_016 and fw17_0415 - findOneAndUpdate use this only 
    const details = await ProjectModel.findOne({_id:projectId})
    if(details.userId === userId){
        const newProject = await ProjectModel.findOneAndUpdate({_id:projectId}, req.body, {new:true})
        res.send("updated successfully")
    } 
    else{
        res.send("you are not authorized")
    } 
})

module.exports = projectController

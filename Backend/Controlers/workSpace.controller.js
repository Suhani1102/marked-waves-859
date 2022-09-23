const Router = require("express");
const WorkSpaceModel = require("../Modals/workSpace.model");
const authentication  = require("../Middleware/authentication");
const UserModel = require("../Modals/user.model");
const workspace = Router();


// Reviewed for: fw16_016 - Always use try/catch with async/await

workspace.get("/",authentication,async(req,res)=>{
    const {userId} = req.body
    const workSpaces = await WorkSpaceModel.find({userId})
    return res.send({workSpaces:workSpaces})
})

// Reviewed for: fw16_016 - You have been doing a lot of things in the given route
// This is actually not a controller, you are registering route here and it should be route
workspace.post("/create",authentication,async(req,res)=>{
    const {teamSize,companyName,userId} = req.body;
    if(!companyName) return res.send({message:"Please fill the company name"})
    if(!teamSize) return res.send({message:"Please put team size"})
    const workSpaces = await WorkSpaceModel.find({companyName});
    // return res.send(workSpaces)
    console.log(workSpaces.length)
    if(workSpaces.length)  return res.send({message:"workspace with this company name already exists"})
    const workSpace = new WorkSpaceModel({
        teamSize,companyName,userId
    })
    await workSpace.save();
    const user = await UserModel.findOneAndUpdate({userId},{workSpaceId:workSpace._id})
    if(workSpace) return res.send({message : "Workspace created successfully Successfully.",workSpaceId:workSpace._id}) 
    else return res.send({message : "Please fill all field."})       
})

module.exports = workspace

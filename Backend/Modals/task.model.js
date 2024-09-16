const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName : {type:String},
    assignee : {type:String},
    projectName: {type:String},
    creater : "String",
    dueDate : String, // Reviewed for: fw16_016 - Can't we use date type here?
    workSpaceId:String,
    userId:String,
    projectId:String,
    taskStatus:{type:String,default:"open"}
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports = TaskModel

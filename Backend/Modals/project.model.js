const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    userId:String,
    workSpaceId:String,
    status: { type: Boolean, default: false },
    name: { type: String, required: true },
    code: { type: String, required: true },
    notes: { type: String, required: false }
})

// Reviewed for: fw17_0415 and fw16_117: Always keep first letter of Model capital: Project
const ProjectModel = mongoose.model("project", schema)

module.exports = ProjectModel

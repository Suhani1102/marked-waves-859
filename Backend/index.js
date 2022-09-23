const express = require("express");

const connection = require("./Config/db");
const user = require("./Controlers/user.controller");
const cors = require("cors");
const projectController = require("./Controlers/project.controller");
const workspace = require("./Controlers/workSpace.controller");
const task = require("./Controlers/taskController");
const authentication = require("./Middleware/authentication");





const app = express();


app.use(cors())
app.use(express.json())
app.use("/auth",user)
app.use("/project", projectController)
app.use("/workspace",workspace)
app.use("/task",task)
// Reviewed for: why do we have this route? Spacing should be maintained
app.get("/",(req,res)=>{
    res.send("heroku")

})



app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Database connected successfully", process.env.port)
    } catch (error) {
        console.log("unable to make connection with Database")
    }
})

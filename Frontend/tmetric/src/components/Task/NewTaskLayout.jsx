import React from 'react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    List,ListIcon,ListItem,
    EditablePreview,
    Flex,
    Select,
    Button

  } from '@chakra-ui/react'
  import {CheckIcon,CloseIcon,EditIcon} from "@chakra-ui/icons"
  import styles from "../../Styles/NewtaskLaout.module.css"
  import { CustomControlableInput } from './CustomControllableInput'
  import { updateTask,deleteTask, getTasks } from '../../redux/app/action'
  import { useDispatch } from 'react-redux'
  
import { GET_TASKS_SUCCESS, TASK_DELETE_SUCCESS, TASK_UPDATE_SUCCESS } from '../../redux/app/actionType'
 
 const assignee = ["Araya","Aman","Hector","Luv"]
const NewTaskLayout = ({taskList,addActivity}) => {

    const [taskName,setTaskName] = React.useState("")
    const [projectName,setProjectName] = React.useState("")
    const [id,setId] = React.useState()
    const [show,setShow] = React.useState(false)
    const [tasks,setTasks]=React.useState([])
    const  [lead,setLead] =React.useState("Assigned")
    const [toRend,setTorend] = React.useState("")
    const dispatch = useDispatch()
    const [activity,setActivity] = React.useState([])

    const [start,setStart] = React.useState(false);
    const [completed,setCompleted] = React.useState(false)

    
console.log(activity)
    const update = (toUpdate) => {
        let act = `${lead} updated taskName to ${taskName}`
        activity.push(act)
        dispatch(updateTask(toUpdate))
        .then((res)=>res.type==TASK_UPDATE_SUCCESS && res.payload.message=="task updated successfully."? dispatch(getTasks()).then((res)=>setTasks(res.payload.tasks)& setTorend("a")& setLead(res.payload.lead) ).catch((err)=>console.log(err)) : "")
    }
    const deleteT = (toDelete) => {
        let act = `${lead} deleted a task`
        activity.push(act)
        dispatch(deleteTask(toDelete))
        .then((res)=>res.type==TASK_DELETE_SUCCESS && res.payload.message=='task deleted successfully.' ? dispatch(getTasks()).then((res)=>setTasks(res.payload.tasks)& setTorend("a")).catch((err)=>console.log(err)) : "")
    }

    React.useEffect(()=>{
        dispatch(getTasks())
        .then((res)=>res.type==GET_TASKS_SUCCESS ? setTasks(res.payload.tasks) & setTorend("a") & setLead(res.payload.lead) : console.log("no tasks"))
    },[taskList,toRend,activity])



console.log(tasks,"projectName")
  // Reviewed for: fw16_016 and fw17_0415 - try to divide big components in smaller modules
  // they are easy to debug and you have opportunities to re-use existing code
  return (
    <div className={styles.NewTaskCompWrapper}>
{/* ====================Left wing=================== */}
        <div className={styles.leftSideInputAndTask}  style={{overflow:"scroll"}}>
            <List spacing={3}>
            Projects
           
               {tasks?.map((elem)=>
                 <ListItem px={5} borderRadius={5} margin={2} className={styles.ManageLeftTaskBg} >

                              <Flex>
                              <ListIcon as={CheckIcon} marginTop={2} color='green.500' onClick={()=>{
                                setId(elem._id);
                                setTaskName(elem.taskName)}
                              } />
                              <Editable width={"100%"} defaultValue={elem.taskName} px={2}>
                              <EditablePreview width={"100%"} />
                              <EditableInput 
                                    onChange={(e)=>setTaskName(e.target.value)}
                                    onKeyDownCapture={(e)=>{ if(e.key=="Enter") {
                                        update({taskName,_id:elem._id})
                                    }}}
                                />
                              </Editable>
                          </Flex>
                    </ListItem>
               )}
            </List>
        </div>

{/* =====================Mid Line================== */}
        <div style={{width:"1px",backgroundColor:"#a1a7b2"}}></div>

{/* =======================Right wing======================== */}


        <div className={styles.rightSideDetails} >

            <div className={styles.RightFirstDiv}>  


                    <div style={{display:"flex",gap:"7px"}}>
                       <div 
                          className={styles.markDoneCont}
                          onClick={()=>setStart(!start)}
                        >
                            {/* Reviewed for: fw16_016 and fw17_0415: className can be more meaningful (just a suggestion nothing wrong with them) and you can create CSS 4 variables for such things as they will be used multiple times */}

                            <div>{!start ? <i style={{fontSize:"24px",color:"green"}} className="fa-solid fa-play"></i> :  <i style={{fontSize:"24px",color:"red"}}  className={styles.stopicon} class ="fa-solid fa-stop"></i>}</div>
                        </div> 
                        
                        <div 
                            className={styles.MarkCompButton}
                            onClick={()=>setCompleted(!completed)}
                            style={completed ? {backgroundColor:"green",color:"white"} : {backgroundColor:"#ebedf0",color:"#34393d"}}
                        >  
                            <CheckIcon marginTop={0.5} />  
                            <div> {completed ? "Completed ": "Mark Complete"}</div>
                        </div>
                    </div>

                    <div style={{display:"flex",gap:"15px",margin:"15px "}}>
                        <i style={{fontSize:"20px"}} className="fa-solid fa-share-nodes"></i>
                        {show ? <Button bg="red" color="white" onClick={()=>{
                            setShow(!show);
                            deleteT({_id:id})}
                        }> Delete </Button> :  <i style={{fontSize:"20px"}} className="fa-solid fa-ellipsis" onClick={()=>setShow(!show)}></i>}
                        <i style={{fontSize:"20px"}} className="fa-solid fa-arrow-right-long" onClick={()=>setShow(!show)}></i>
                       
                    </div>

 
               
            </div>


            <div className={styles.taskNameInput}>
                <Editable width={"100%"} defaultValue={taskName ? taskName : " Update Task Name"} px={2}>
                <EditablePreview width={"100%"} />
                <EditableInput 
                    onChange={(e)=>setTaskName(e.target.value)}
                    onKeyDownCapture={(e)=>{if(e.key=="Enter") update({taskName:taskName,_id:id})}}
                />
                </Editable>
            </div>


            <div className={styles.Projectdetails}>
                <div style={{display:"flex",gap:'35px',height:"45px",paddingTop:"5px"}}>
                    <div>Project</div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <i style={{marginTop:"5px"}} class="fa-solid fa-folder-closed"></i>
                    <div>
                       <Editable width={"100%"} defaultValue='Write a Task name' px={2}>
                            <EditablePreview width={"100%"} />
                            <EditableInput 
                               onChange={(e)=>setProjectName(e.target.value)}
                               onKeyDownCapture={(e)=>{ if(e.key=="Enter") update({projectName:projectName,_id:id})}}
                            />
                       </Editable>
                    </div>
                    </div>
                </div>
                <div style={{display:"flex",gap:'35px',height:"45px"}}>
                    <div style={{marginTop:"7px"}}>Assignee</div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <i style={{marginTop:"12px"}}  className="fa-solid fa-user-tie"></i>
                    <div>
                        <Select placeholder='Unassigned'

                        onChange={(e)=>{
                            update({assignee:e.target.value},{_id:id.userId})
                        }}
                        
                        >
                        {assignee.map((elem)=>
                            <option value={elem}>{elem}</option>
                        )}
                            {/* <option value={lead}>{lead}</option>
                            {tasks?.map((elem,index)=><option key={index} value={elem.assignee}>{elem.assignee}</option>)} */}
                        </Select>
                    </div>
                    </div>
                </div>
                <div style={{display:"flex",gap:'35px',height:"45px",marginTop:"5px"}}>
                    <div>Due Date</div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <i style={{marginTop:"5px"}} class="fa-solid fa-calendar-days"></i>
                    <div>
                       <input type="date" />
                    </div>
                    </div>
                </div>
            </div>

            
            <div className={styles.taskDescription}>
                <i style={{marginTop:"7px"}} className="fa-solid fa-bars"></i>
                <Editable defaultValue='Enter Task Description' width={"100%"} >
                    <EditablePreview />
                    <EditableTextarea paddingTop={5} paddingLeft={5}/>
                </Editable>
            </div>


            <div className={styles.TimeEstimation}>
                <div>Estimate</div>
                <div style={{marginTop:"-8px"}}> 
                    <CustomControlableInput />
                </div>
            </div>
            {/* <div className={styles.LowerActtagDiv} style={{borderBottom: "1px solid #a1a7b2"}}>
               <div><i className="fa-solid fa-tag"></i></div>
               <div>Add Tag</div>
            </div> */}
            <div>
                   <div className={styles.LowerActtagDiv}>
                      <div><i className="fa-solid fa-chart-column"></i></div>
                     < div>Activity</div>
                   </div>
                   <ul style={{height:"10vh",overflow:"scroll"}}>
                    {activity?.map((elem,index)=> 
                        <Flex key={index}>
                            <div><i style={{color:"green"}} className="fa-solid fa-user-tie"></i></div>
                           <li style={{marginLeft:"10px"}} >{elem}</li>
                        </Flex>
                )}
                   </ul>
            </div>
            
            
        </div>
       
       
    </div>
  )
}

export default NewTaskLayout





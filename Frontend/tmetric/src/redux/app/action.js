import {
    WORKSPACE_CREATE_REQUEST,
    WORKSPACE_CREATE_SUCCESS,
    WORKSPACE_CREATE_FAILURE,
    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAILURE,
    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAILURE,
     TASK_DELETE_REQUEST,
     TASK_DELETE_SUCCESS,
     TASK_DELETE_FAILURE,
     GET_TASKS_REQUEST,
     GET_TASKS_SUCCESS,
     GET_TASKS_FAILURE,
     GET_PROJECT_FAILURE,
     GET_PROJECT_SUCCESS,
     GET_PROJECT_REQUEST,
     DELETE_PROJECT_SUCCESS,
     CREATE_PROJECT_SUCCESS,
     PATCH_PROJECT_SUCCESS
} from "./actionType"
import axios from 'axios'
import { loadData } from "../../utils/localstorage"



export const workspaceCreateRequest = () => {
    return {
        type : WORKSPACE_CREATE_REQUEST
    }
}
export const workspaceCreateSuccess = (payload) => {
    return {
        type : WORKSPACE_CREATE_SUCCESS,
        payload
    }
}
export const workspaceCreateFailure = (err) => {
    return {
        type : WORKSPACE_CREATE_FAILURE,
        err
    }
}

export const getTasksRequest = () => {
    return {
        type : GET_TASKS_REQUEST
    }
}
export const getTasksSuccess = (payload) => {
    return {
        type : GET_TASKS_SUCCESS,
        payload
    }
}
export const getTasksFailure = (err) => {
    return {
        type : GET_TASKS_FAILURE,
        err
    }
}

export const taskCreateRequest = () => {
    return {
        type : TASK_CREATE_REQUEST
    }
}
export const taskCreateSuccess = (payload) => {
    return {
        type : TASK_CREATE_SUCCESS,
        payload
    }
}
export const taskCreateFailure = (err) => {
    return {
        type : TASK_CREATE_FAILURE,
        err
    }
}

export const taskUpdateRequest = () => {
    return {
        type : TASK_UPDATE_REQUEST
    }
}
export const taskUpdateSuccess = (payload) => {
    return {
        type : TASK_UPDATE_SUCCESS,
        payload
    }
}
export const taskUpdateFailure = (err) => {
    return {
        type : TASK_UPDATE_FAILURE,
        err
    }
}
export const taskDeleteRequest = () => {
    return {
        type : TASK_DELETE_REQUEST
    }
}
export const taskDeleteSuccess = (payload) => {
    return {
        type : TASK_DELETE_SUCCESS,
        payload
    }
}
export const taskDeleteFailure = (err) => {
    return {
        type : TASK_DELETE_FAILURE,
        err
    }
}


// ====================Workspace========================

// Reviewed for: fw16_117, fw16_016 and fw17_0415 - Never use Urls directly, create Constant folder and create one file Url.constant.js
export const createWorkSpace = (payload) => (dispatch) => {
    dispatch(workspaceCreateRequest())
    return axios.post("https://polar-woodland-63049.herokuapp.com/workspace/create",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(workspaceCreateSuccess(res.data)))
    .catch((err)=>dispatch(workspaceCreateFailure(err)))
}


//=================================TASKS=================================

export const getTasks = () => (dispatch) => {
    dispatch(getTasksRequest())
    return axios.get("https://polar-woodland-63049.herokuapp.com/task",{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(getTasksSuccess(res.data)))
    .catch((err)=>dispatch(getTasksFailure(err)))
}

export const createTask = (payload) => (dispatch) => {
    dispatch(taskCreateRequest())
    return axios.post("https://polar-woodland-63049.herokuapp.com/task/create",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(taskCreateSuccess(res.data)))
    .catch((err)=>dispatch(taskCreateFailure(err)))
}

export const updateTask = (payload) => (dispatch) => {
    
    dispatch(taskUpdateRequest())
    return axios.patch("https://polar-woodland-63049.herokuapp.com/task/update",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(taskUpdateSuccess(res.data)))
    .catch((err)=>dispatch(taskUpdateFailure(err)))
}

export const deleteTask = (payload) => (dispatch) => {

    dispatch(taskDeleteRequest())
    return axios.delete("https://polar-woodland-63049.herokuapp.com/task/delete",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(taskDeleteSuccess(res.data)))
    .catch((err)=>dispatch(taskDeleteFailure(err)))
}
// -------------------------------PROJECTS----------------------------------------------------
export const get_projects = ()=>dispatch=>{
    return axios.get("https://polar-woodland-63049.herokuapp.com/project",{
        headers:{
            'Authorization':`Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>{
        console.log(res.data.projects)
        dispatch({
        type:GET_PROJECT_SUCCESS,
        payload:res.data.projects
    })})
    .catch((err)=>dispatch({
        type:GET_PROJECT_FAILURE
    }))
}
export const delete_project = (_id)=>dispatch=>{
    console.log(_id)
    return axios.delete(`https://polar-woodland-63049.herokuapp.com/project/${_id}/delete`,{
        headers:{
            'Authorization':`Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>{

        dispatch({
            type:DELETE_PROJECT_SUCCESS,
            payload:_id
        })
    })
    .catch((err)=>{
        console.log("error in deleting")
    })
}

export const create_project = (payload)=>dispatch=>{
    return axios.post(`https://polar-woodland-63049.herokuapp.com/project/create`,payload,{
        headers:{
            'Authorization':`Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>{
        console.log(res)
        dispatch({
            type:CREATE_PROJECT_SUCCESS,
            payload

        })
    })
    .catch((err)=>{
        console.log("error in creating")
    })
}

export const patch_request = (_id,payload)=>dispatch=>{
    console.log(_id)
    return axios.patch(`https://polar-woodland-63049.herokuapp.com/project/${_id}/patch`,payload,{
        headers:{
            'Authorization':`Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>{

        dispatch({
            type:PATCH_PROJECT_SUCCESS,
            payload:{_id,payload}
        })
    })
    .catch((err)=>{
        console.log("error in patching")
    })
}

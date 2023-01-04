import axios from "axios";


const API_URL = '/api/activity/'

const createActivity = async(activityData , token)=>{
    console.log(token)

    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL,activityData,config)
    return response.data
    
}

const getActivity = async(token)=>{
    
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL,config)
    return response.data
    
}

const deleteActivity = async(activityId,token)=>{
    
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + activityId,config)
    return response.data
    
}


export const activityService = {createActivity,getActivity,deleteActivity}

export default activityService
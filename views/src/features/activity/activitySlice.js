import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'
import {activityService} from './activityService'

const initialState = {
    activities :[],
    isSuccess : false,
    isLoading : false,
    isError : false,
    message:''
}

export const createActivity = createAsyncThunk('activity/create',
async(activityData , thunkAPI)=>{
    try {
            let token = thunkAPI.getState().auth.user.token
        return await activityService.createActivity(activityData , token)
        
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})


export const getActivty=createAsyncThunk('activity/getAll',
async(_,thunkAPI)=>{
try {
    let token = thunkAPI.getState().auth.user.token
        return await activityService.getActivity(token)
    
} catch (error) {
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
}
})

export const deleteActivity = createAsyncThunk('activity/delete',
async(id , thunkAPI)=>{
    try {
            let token = thunkAPI.getState().auth.user.token
        return await activityService.deleteActivity(id ,token)
        
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

const activitiesSlice = createSlice({
    name:'activity',
    initialState,
    reducers:{
        reset :(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createActivity.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createActivity.fulfilled,(state,action)=>{
            state.isLoading = false
        state.isSuccess = true
        state.activities.push(action.payload)
        })
        .addCase(createActivity.rejected,(state,action)=>{
            state.isLoading = false
        state.isError = true
        state.message =action.payload
        })
        .addCase(getActivty.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getActivty.fulfilled,(state,action)=>{
            state.isLoading = false
        state.isSuccess = true
        state.activities=action.payload
        })
        .addCase(getActivty.rejected,(state,action)=>{
            state.isLoading = false
        state.isError = true
        state.message =action.payload
        })
        .addCase(deleteActivity.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteActivity.fulfilled,(state,action)=>{
            state.isLoading = false
        state.isSuccess = true
        state.activities=state.activities.filter(
            (activity)=>activity._id !== action.payload.id)
        })
        .addCase(deleteActivity.rejected,(state,action)=>{
            state.isLoading = false
        state.isError = true
        state.message =action.payload
        })
    }

    
})

export const {reset} = activitiesSlice.actions
export default activitiesSlice.reducer 
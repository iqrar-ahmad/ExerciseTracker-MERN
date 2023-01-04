const asyncHandler = require('express-async-handler')
const Activity = require('../models/activityModel')
const User = require('../models/userModel')

//@Desc getActivity
//@API /api/activity
const getActivity = asyncHandler(async(req, res)=>{
   
    const activity = await Activity.find({user : req.user.id})
    res.status(200).json(activity)
    }) 
//@Desc PostActivity
//@API /api/activity
const setActivity = asyncHandler(async(req, res)=>{
    if(!(req.body.activityname && req.body.description && req.body.duration && req.body.date )){
        res.status(400)
        throw new Error('please add a all field')
    }
    const activity= await Activity.create({
        activityname:req.body.activityname,
        description:req.body.description,
        duration:req.body.duration,
        date:req.body.date,
        user:req.user.id,
    })
    res.status(200).json(activity)
})
    //@Desc updateActivity
//@API /api/activity/id
const updateActivity = asyncHandler(async(req, res)=>{

    const activity = await Activity.findById(req.params.id)

    if(!activity){
        res.status(400)
        throw new Error('Activity not found')
    }
    

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(activity.user.toString()!== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedActivity = await Activity.findByIdAndUpdate(
        req.params.id , req.body ,{new : true})

    res.status(200).json(updatedActivity)
    })

    //@Desc deleteActivity
//@API /api/activity/id
const deleteActivity = asyncHandler(async(req, res)=>{

    const activity = await Activity.findById(req.params.id)

    if(!activity){
        res.status(400)
        throw new Error('Activity not found')
    }

    

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(activity.user.toString()!== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await activity.remove();
    res.status(200).json({id:req.params.id})
    })

module.exports = {
    getActivity,
    setActivity,
    updateActivity,
    deleteActivity
}
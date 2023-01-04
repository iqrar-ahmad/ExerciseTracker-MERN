const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'

    },

    activityname:{
        type:String,
        required : [true,'please add activity name']
    },
    duration:{
        type:Number,
        required : [true,'please add duration']
    },
    date:{
        type:Date,
        required : [true,'please add date']
    },
    description:{
        type:String,
        required : [true,'please add activity description']
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Activity', activitySchema)
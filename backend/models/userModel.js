const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname :{
        type:String,
        required : [true,'plase add a first name']
    },
    lastname :{
        type:String,
        required : [true,'plase add a last name']
    },
    email :{
        type:String,
        required : [true,'plase add email id'],
        unique : true
    },
    password :{
        type:String,
        require : [true,'password is empty']
    }
},
{
    timestamp : true
})

module.exports = mongoose.model('User',userSchema)
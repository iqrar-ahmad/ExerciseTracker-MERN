
const express = require('express')
const dotenv = require('dotenv').config()
const color = require('colors')
const {errorHandler} = require('./middlewere/errorMiddlewere')
const connectDB = require('./cofig/db')
const port =process.env.PORT || 5000

connectDB()
const app =express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/activity', require('./routes/activityRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port , ()=>console.log(`server started on port${port}`))
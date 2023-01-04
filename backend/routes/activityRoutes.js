
const express = require('express')
const router = express.Router() 
const {protect} = require('../middlewere/authMiddleware')
 const {getActivity,setActivity,
    updateActivity,deleteActivity }= require('../controllers/activityController')

router.route('/').get(protect,getActivity).post(protect,setActivity)
router.route('/:id').put(protect,updateActivity).delete(protect,deleteActivity)




module.exports=router
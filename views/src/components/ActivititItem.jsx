import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteActivity} from '../features/activity/activitySlice'
import { FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';


const ActivititItem = ({activity}) => {
    const dispatch = useDispatch()
  return (
    <div className='goal'>
        <div>
            {new Date(activity.createdAt).toLocaleString('en-US')}
        </div>
        <h3>name: {activity.activityname}</h3>
        <h3>duration: {activity.duration}</h3>
        <h3>description: {activity.description}</h3>
        <h3>date: {new Date(activity.date).toDateString('en-US')}</h3>
        <ul className='close'>
          <li> <button onClick={()=>dispatch(deleteActivity(activity._id))}>X</button></li>
          <li>
            <Link to='/editactivity'>
            <FaEdit/>
            </Link>
          </li>
            
            
        </ul>
        
        

    </div>
  )
}

export default ActivititItem
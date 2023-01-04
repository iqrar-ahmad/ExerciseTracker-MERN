import React from 'react'
import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {createActivity} from '../features/activity/activitySlice'
import { Spinner } from './Spinner'

export const ActivityCard = () => {
  
  const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        activityname: '',
        duration: '',
        date: '',
        description: '',
      
      })
    
      const { activityname,duration, date, description} = formData


 



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const activityData = {
        activityname,
        duration,
        date,
        description,
      }

      dispatch(createActivity(activityData))
      setFormData({
        activityname: '',
        duration: '',
        date: '',
        description: '',
      
      })
  }
  const {isLoading} = useSelector((state)=>state.activity)
 


  if(isLoading){
    return <Spinner/>
  }

  

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='activity'><h6>Activity Name</h6></label>
          <input
            type='text'
            name='activityname'
            id='activityname'
            value={activityname}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='duration'><h6>Duration</h6></label>
          <input
            type='number'
            name='duration'
            id='duration'
            value={duration}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'><h6>Description</h6></label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='date'><h6>Date</h6></label>
          <input
            type='date'
            name='date'
            id='date'
            value={date}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Activity
          </button>
        </div>
      </form>
    </section>
  )

}

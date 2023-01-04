import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  useSelector ,useDispatch} from 'react-redux'

import { Spinner } from '../components/Spinner'
import { getActivty} from '../features/activity/activitySlice'
import ActivititItem from '../components/ActivititItem'





const Dashboard = () => {

  const navigate = useNavigate()
 const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)
const {activities,isError,message,isLoading}=useSelector((state)=>state.activity)
 

  useEffect(()=>{

   
    if(isError){
      console.log(message)
    }

    if(!user){
      navigate('/login')
    }

    

    dispatch(getActivty())

   

  },[user,navigate,isError,message,dispatch])

 if(isLoading){
  <Spinner/>
 }
   

  return (
    <>
    <section className="heading">
    <p>Activity Dashboard</p>
    </section>
    
<section className='content'>
{activities.length>0 ? (
  <div className='goals'>
    {
      activities.map((activity)=>(
        <ActivititItem key={activity._id} activity={activity} />
      
      ))
    }
  </div>
):(<h2>you have not set any activity</h2>) }
</section>

<section>
<div className='form-group'>
          <Link to="/addactivity"><button className='btn btn-block' type='submit'>
            Add Activity
          </button></Link>
          </div>
</section>

    </>
  )
}

export default Dashboard
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register,reset} from '../features/auth/authSlice'
import { Spinner } from '../components/Spinner'

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
      })
    
      const { firstname,lastname, email, password, password2 } = formData

      const navigate = useNavigate()
      const dispatch = useDispatch()
      const {user , isLoading , isError,isSucces,message} = useSelector((state)=>state.auth)

      useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSucces || user){
            navigate('/')
        }
        dispatch(reset())

      },[user, isError,isSucces,message,navigate,dispatch])

      
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        })) 
      }

      const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Passwords do not match')
          } else {
            const userData = {
              firstname,
              lastname,
              email,
              password,
            }
      
            dispatch(register(userData))
          }
        
      }
      if(isLoading){
        return <Spinner/>
      }

  return (
    <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='fname'
            name='firstname'
            value={firstname}
            placeholder='first name'
            onChange={onChange}
          />
           <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='lastname'
            name='lastname'
            value={lastname}
            placeholder='last name'
            onChange={onChange}
          />
        </div>
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
  )
}

export default Register

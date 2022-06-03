import cb from 'classnames'
import Layout from '../../layouts/Layout'
import styles from "./register.module.css"
import {useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/actor/actorSlice'

export default function RegisterPage() {
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.actor)
  const [formData, setFormData] = useState ({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const {email, password, confirmPassword} = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    if(isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const registerData = {email, password, confirmPassword}
    dispatch(register(registerData))
  }

 if (isLoading) {
   return <div>Loading</div>
 }

  return (
    <Layout splash>
      <section className={cb(styles.register, "container")}>
        <form onSubmit={handleSubmit}>
          <input 
          placeholder='email'
          type="email" 
          name="email" 
          autoComplete='email' 
          value={email} 
          onChange={onChange}/>

          <input 
          placeholder='password'
          type="password" 
          name="password" 
          value={password} 
          onChange={onChange}/>

          <input 
          placeholder='Confirm Password'
          type="password" 
          name="confirmPassword"   
          value={confirmPassword} 
          onChange={onChange}/>

          <button type='submit'>Submit</button>
        </form>
      </section>
    </Layout>
  )
}

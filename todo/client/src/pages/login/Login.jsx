import cb from 'classnames'
import Layout from '../../layouts/Layout'
import styles from "./login.module.css"
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/actor/actorSlice'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.actor)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState ({
    email: "",
    password: "",
  })

  const {email, password} = formData

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
    const registerData = {email, password}
    dispatch(login(registerData))
    console.log(formData);
  }

  if (isLoading) {
    return <div>loading...</div>
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

          <button type='submit'>Submit</button>
        </form>
      </section>
    </Layout>
  )
}

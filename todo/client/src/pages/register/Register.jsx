import cb from 'classnames'
import Layout from '../../layouts/Layout'
import styles from "./register.module.css"
import {useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/actor/actorSlice'
import RegisterForm from '../../components/template/forms/RegisterForm'

export default function RegisterPage() {
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.actor)

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


 if (isLoading) {
   return <div>Loading</div>
 }

  return (
    <Layout splash>
      <section className={cb(styles.register, "container")}>
        <RegisterForm/>
      </section>
    </Layout>
  )
}

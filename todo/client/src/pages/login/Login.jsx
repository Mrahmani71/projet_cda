import cb from 'classnames'
import Layout from '../../layouts/Layout'
import styles from "./login.module.css"
import {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {reset } from '../../features/actor/actorSlice'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/template/forms/LoginForm'

export default function LoginPage() {
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.actor)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    return <div>loading...</div>
  }

  return (
    <Layout splash>
      <section className={cb(styles.register, "container")}>
        <LoginForm/>
      </section>
    </Layout>
  )
}

import cb from 'classnames'

import styles from "./form.module.css"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { login } from '../../../features/actor/actorSlice'
import InputAtom from '../../atoms/input/Input'

export default function LoginForm() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const registerData = { email, password }
    dispatch(login(registerData))
  }

  return (
    <>
      <h1 className={cb(styles.title_form)}>Register Form</h1>
      <form className={cb(styles.form)} onSubmit={handleSubmit}>
      <InputAtom
          placeHolder='Your Email'
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          formData={setFormData} />

        <InputAtom
          placeHolder='Your password'
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange} />

        <button className={cb(styles.button)} type='submit'>Submit</button>
      </form>
    </>
  )
}

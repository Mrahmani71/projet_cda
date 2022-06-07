import cb from 'classnames'
import styles from "./form.module.css"
import { useState } from "react"

import { useDispatch } from 'react-redux'
import InputAtom from '../../atoms/input/Input'
import { register } from '../../../features/actor/actorSlice'

export default function RegisterForm() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { email, password, confirmPassword } = formData
  const dispatch = useDispatch()


  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const registerData = { email, password, confirmPassword }
    dispatch(register(registerData))
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
          onChange={onChange} />

        <InputAtom
          placeHolder='Your password'
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange} />

        <InputAtom
          placeHolder='Confirm your Password'
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange} />

        <button className={cb(styles.button)} type='submit'>Submit</button>
      </form>
    </>
  )
}

import cb from 'classnames'

import styles from "./form.module.css"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import InputAtom from '../../atoms/input/Input'
import TextAreaAtom from '../../atoms/textArea/TextArea'
import { editTodo } from '../../../features/todos/todoSlice'

export default function EditTodoForm({setEdit, data}) {

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    id: data.id,
    title: data.title,
    description: data.description,
  })

  const { id, title, description } = formData

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const todoData = { id , title, description }
    dispatch(editTodo(todoData))
    setEdit()
  }

  return (
    <>
      <h1 className={cb(styles.title_form)}>Edit a todo</h1>
      <span onClick={() => setEdit()} >
        <svg xmlns="http://www.w3.org/2000/svg" className={cb(styles.closeBtn)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <form className={cb(styles.form)} onSubmit={handleSubmit}>
        <InputAtom
          placeHolder='Enter a title'
          label="Title"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          formData={setFormData} />

        <TextAreaAtom
          placeHolder='Enter a description'
          label="Description"
          type="text"
          name="description"
          value={description}
          onChange={onChange} />

        <button className={cb(styles.button)} type='submit'>Add</button>
      </form>
    </>
  )
}

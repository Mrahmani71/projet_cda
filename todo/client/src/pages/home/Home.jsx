import cb from 'classnames'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from '../../components/modal/Modal'
import AddTodoForm from '../../components/template/forms/AddTodoForm'
import { doTodo, getTodos } from '../../features/todos/todoSlice'
import Layout from '../../layouts/Layout'
import styles from "./home.module.css"

export default function HomePage() {
  const [show, setShow] = useState(false)
  const { todos, isError, isLoading, message } = useSelector((state) => state.todos)

  const dispatch = useDispatch()
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getTodos())

  }, [isError, message, dispatch])

  function handleDo(id, num) {
    const userData = {id: id, do: num}
    console.log(userData);
    dispatch(doTodo(userData))
  }

  function handleShow() {
    setShow(!show)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Layout>
      {
        show && (
      <ModalComponent>
          <AddTodoForm setShow={setShow}/>
      </ModalComponent>
        ) 
      }
      <section className={cb(styles.home, "container")}>
        <div className={cb(styles.front)}>
          <h1 className={cb(styles.title)}>List de Todos</h1>
          <span className={cb(styles.ajouter)} onClick={handleShow}>+ Ajouter</span>
        </div>
        <div className={styles.todos}>
          {
            todos.map(todo => (
              <div key={todo.id} className={cb(styles.todo_item, todo.do === 1 ? styles.didit : "")} onClick={() => handleDo(todo.id, todo.do === 1 ? 0 : 1)}>
              <div >{todo.title}</div>
              <div>{todo.date.slice(0,10)}</div>
              </div>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

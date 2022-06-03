import cb from 'classnames'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../features/todos/todoSlice'
import Layout from '../../layouts/Layout'
import styles from "./home.module.css"

export default function HomePage() {
  const { todos, isError, isLoading, message } = useSelector((state) => state.todos)

  const dispatch = useDispatch()
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getTodos())

  }, [isError, message, dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Layout>
      <section className={cb(styles.home, "container")}>
        <div className={cb(styles.front)}>
          <h1 className={cb(styles.title)}>List de Todos</h1>
          <span className={cb(styles.ajouter)}>+ Ajouter</span>
        </div>
        <div className={styles.todos}>
          {
            todos.map(todo => (
              <div key={todo.id} className={styles.todo_item}>
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

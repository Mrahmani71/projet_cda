import cb from 'classnames'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from '../../components/modal/Modal'
import AddTodoForm from '../../components/template/forms/AddTodoForm'
import EditTodoForm from '../../components/template/forms/EditTodoForm'
import { deleteTodo, doTodo, getTodos } from '../../features/todos/todoSlice'
import Layout from '../../layouts/Layout'
import styles from "./home.module.css"
import "./homeStyle.css"
export default function HomePage() {
  const [editData, setEditData] = useState({
    title: "",
    description: ""
  })
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [selected, setSelected] = useState(null)
  const { todos, isError, isLoading, message } = useSelector((state) => state.todos)


  const dispatch = useDispatch()
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getTodos())

  }, [isError, message, dispatch])

  const toggle = (e, i) => {

    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  function handleDo(id, num) {
    const userData = { id: id, do: num }

    dispatch(doTodo(userData))
  }

  function handleShow() {
    setShow(!show)
  }

  function handleEdit(id, title, description) {
    setEditData({
      id,
      title,
      description
    })

    setEdit(!edit)
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Layout>
      {
        show && (
          <ModalComponent>
            <AddTodoForm setShow={setShow} />
          </ModalComponent>
        )
      }
      {
        edit && (
          <ModalComponent>
            <EditTodoForm data={editData} setEdit={setEdit} />
          </ModalComponent>
        )
      }
      <section className={cb(styles.home, "container")}>
        <div className={cb(styles.front)}>
          <h1 className={cb(styles.title)}>Liste de tâches</h1>
          <span className={cb(styles.ajouter)} onClick={handleShow}>+ Ajouter</span>
        </div>
        <div className={styles.todos}>
          {
            todos.map((todo, i) => (
              <div key={i} className={selected === i ? "todo_item shadow_todo" : "todo_item"}>
                <div className={cb("todo_title")} onClick={(e) => toggle(e, i)}>
                  <h3 className={cb(todo.do === 1 ? styles.didit : "")}>{todo.title}</h3>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "todo_content show" : "todo_content"}>
                  <h4 className={cb(todo.do === 1 ? styles.didit : "")}>{todo.description}</h4>
                  <div className={cb(styles.icons)}>

                    <span className={cb(styles.todo_icon)} onClick={() => handleDo(todo.id, todo.do === 1 ? 0 : 1)}>
                      {
                        todo.do === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )
                      }

                    </span>

                    <span className={cb(styles.todo_icon)} onClick={() => handleEdit(todo.id, todo.title, todo.description)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </span>

                    <span className={cb(styles.todo_icon)} onClick={() => handleDelete(todo.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

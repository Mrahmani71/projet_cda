import React from 'react'
import Navbar from '../components/navbar'
import styles from "./layout.module.css"

export default function Layout({children}) {
  return (
    <>
    {/* <header className={styles.header}>
      <Navbar/>
    </header> */}
    <main>
      {children}
    </main>
    {/* <footer>
      <p>Mor MOR</p>
    </footer> */}
    </>
  )
}

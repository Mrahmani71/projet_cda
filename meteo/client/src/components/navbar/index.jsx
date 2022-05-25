import React from 'react'
import cb from "classnames"
import ToggleTheme from '../toggle-theme/ToggleTheme'
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={cb(styles.navbar, "container")}>
      <ul className={styles.nav_items}>
        <li className={cb('h5', styles.item)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <div>
            S'inscrire
          </div>

        </li>
        <li className={cb('h5', styles.item)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <div>
            Connexion
          </div>
        </li>
        <li><ToggleTheme/></li>
      </ul>
    </nav>
  )
}

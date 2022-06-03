import cb from 'classnames'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={cb(styles.navbar)}>
      <Link to="/" className={cb(styles.logo, "brand")}>TODO APP</Link>
    </nav>
  )
}

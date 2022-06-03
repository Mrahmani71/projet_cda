import cb from 'classnames'
import { Link } from 'react-router-dom'
import styles from "./logo.module.css"

export default function Logo() {
  return (
    <Link to="/" className={cb(styles.logo, 'brand')}>Logo</Link>
  )
}

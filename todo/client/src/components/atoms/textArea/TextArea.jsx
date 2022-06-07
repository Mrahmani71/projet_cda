import cb from "classnames"
import styles from "./textArea.module.css"

export default function TextAreaAtom({ type, name, placeHolder, value, onChange, label }) {

  return (
    <div className={cb(styles.TextAreaAtom)}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <textarea id={name} className={cb(styles.textArea)} type={type} name={name} placeholder={placeHolder} value={value} onChange={onChange} autoComplete={name} />
    </div>
  )
}
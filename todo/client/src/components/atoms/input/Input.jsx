import cb from 'classnames'

import styles from "./input.module.css"

export default function InputAtom({ type, name, placeHolder, value, onChange, label }) {

  return (
    <div className={cb(styles.InputAtom)}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} className={cb(styles.input)} type={type} name={name} placeholder={placeHolder} value={value}  onChange={onChange} autoComplete={name} />
    </div>
  )
}

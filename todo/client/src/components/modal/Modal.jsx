import cb from "classnames"
import styles from "./modal.module.css"


export default function ModalComponent({ children }) {
    return(
      <div className={cb(styles.modal)} >
    <div className={cb(styles.modalContent)}>
      {children}
    </div>
  </div >
)
}

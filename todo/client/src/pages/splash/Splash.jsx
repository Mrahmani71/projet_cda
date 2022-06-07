import cb from 'classnames'
import Layout from '../../layouts/Layout'
import styles from "./splash.module.css"
import splash from "../../assets/images/splash.png"
import { Link } from 'react-router-dom'

export default function Splash() {
  return (
    <Layout splash>
      <section className={cb(styles.splash, "container")}>
        <div className={cb(styles.img)}>
          <img src={splash} alt="" srcSet="" />
        </div>
        <div className={cb(styles.descript)}>
          <h1 className={cb(styles.titre)}>TODO App</h1>
          <p className={cb(styles.description)}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <ul className={cb(styles.list)}>
            <li className={cb(styles.item)}>Raison 1</li>
            <li className={cb(styles.item)}>Raison 2</li>
            <li className={cb(styles.item)}>Raison 3</li>
            <li className={cb(styles.item)}>Raison 4</li>
          </ul>
          <div className={cb(styles.link_buttons)}>

          <Link to="/inscrire" className={cb(styles.inscrire_button)}>Inscrire</Link>
          <Link to="/connexion" className={cb(styles.connexion_button)}>Connexion</Link>
          </div>

        </div>
      </section>
    </Layout>

  )
}

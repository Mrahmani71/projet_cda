import cb from 'classnames'
import Layout from '../../layouts/Layout'
import styles from "./admin.module.css"

export default function AdminPage() {
  return (
    <Layout>
      <section className={cb(styles.splash, "container")}>Page Admin</section>
    </Layout>
  )
}

import cb from 'classnames'
import style from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <header className={cb(style.header)}></header>
      <main className={cb(style.main)}>
        {children}
      </main>
      <footer className={cb(style.footer)}></footer>
    </>
  )
}

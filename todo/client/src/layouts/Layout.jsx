import cb from 'classnames'
import Logo from '../components/template/logo/Logo'
import Navbar from '../components/template/navbar/Navbar'
import style from './layout.module.css'

export default function Layout({ children , splash }) {
  return (
    <div className={cb(style.layout)}>
      <header className={cb(style.header, "container")}>
        {splash ? <Logo/> : <Navbar/>}
      </header>
      <main className={cb(style.main)}>
        {children}
      </main>
      <footer className={cb(style.footer)}></footer>
    </div>
  )
}

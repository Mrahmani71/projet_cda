import React, { useEffect, useState } from 'react'
import './toggle-style.css'
export default function ToggleTheme() {
    const nameTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState('')
    const [dark, setDark] = useState(false)

    useEffect(() => {
      if (nameTheme) {
        setDark(true)
        setTheme("Light")
        document.body.classList.add("dark-theme")
      } 
      if (!nameTheme) {
        setDark(false)
        setTheme("Dark")
      }
    }, [])
    function changeTheme() {
        if (dark) {
          setTheme("Light")
          setDark(false)
          localStorage.setItem('theme', true )
          document.body.classList.add("dark-theme")
          // document.body.classList[dark ? "add" : "remove"]("dark-theme")
        } else {
          setTheme("Dark")
          setDark(true)
          localStorage.removeItem('theme')
          document.body.classList.remove("dark-theme")
          // document.body.classList[dark ? "add" : "remove"]("dark-theme")
        }        
    }
  return (
      <>
        <input type="button" className='button__toggle' onClick={changeTheme} value={theme}/>
      </>
  )
}

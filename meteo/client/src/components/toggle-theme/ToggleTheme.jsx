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
      localStorage.setItem('theme', true)
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
    <div className='toggle__container'>
      <button type="button" className='button__toggle' onClick={changeTheme}>
        {
          theme === "Dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        }
      </button>
    </div>
  )
}
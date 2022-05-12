import React, { useState } from 'react'
import cb from "classnames"

import "./search-style.css"
export default function Search({search}) {
    const [nameVille, setNameVille] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        search(nameVille)
    }
    return (
        <form className='search__form' onSubmit={handleSubmit}>
            <input className='search__input' placeholder='search' type="text" value={nameVille} 
            onChange={(e) => setNameVille(e.target.value)} />
            <button className={cb('search__button', "button")} type='submit'>Search</button>
        </form>
  )
}

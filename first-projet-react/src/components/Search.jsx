import React, { useState } from 'react'

export default function Search({search}) {
    const [nameVille, setNameVille] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        search(nameVille)
    }
    return (
        <form className='searchForm' onSubmit={handleSubmit}>
            <input className='searchInput' placeholder='search' type="text" value={nameVille} 
            onChange={(e) => setNameVille(e.target.value)} />
            <button className='button' type='submit'>Search</button>
        </form>
  )
}

import './Header.css'
import React, { useState } from 'react';
function Header({ setQuery }) {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(text)
    }
    return (
        <header className='header'>
            <h1>Free World Wide News</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Search news' />
                <button>Search</button>
            </form>
        </header>
    )
}
export default Header;
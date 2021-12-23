import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState'
import {Link} from "react-router-dom"

export default function Header() {
    const state = useContext(GlobalState)
    const [search, setSearch] = state.productsAPI.search
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(title)
        setTitle("")
    }

    useEffect(() => {
    },[search])
    return (
        <header className="header__container">
            <div>
            <Link to="/">
            <h2>Levanquang</h2>
            </Link>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" value={title} placeholder='Search movies...' 
                onChange={(e) => setTitle(e.target.value.toLowerCase())} className="search__input"/>
            </form>
            </div>
            <nav>
                <h3>Home</h3>
                <h3>Cart</h3>
                <h3>Login</h3>
            </nav>
        </header>
    )
}

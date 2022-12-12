import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header  = () => {
    return (
    <div className="h-full p-10
        overflow-hidden">
        <h1 className="text-3xl text-black para1 mb-3">
            Langdeck
        </h1>
        <nav className="flex justify-between relative items-center font-mono h-16">
            <Link to="/" className="pl-8 text-xl text-black para1">Langdeck Farm</Link>
            <div className="pr-8 text-black para1">
                <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/languages">Languages</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/new">New Language</NavLink>
            </div>
        </nav>
    </div>
    )
}
export default Header
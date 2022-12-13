import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo-langdeck-w_fpt-v1.png';

const Header  = () => {
    return (
    <div className="logo h-full p-5
        overflow-hidden">
        <nav className="flex justify-between relative items-center h-16">
            <Link to="/" className="pl-8 text-xl text-black para1"><img className="logo" src={logo}></img></Link>
            <div className="pr-8 text-black para1">
                <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/regions">Regions</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/languages">Languages</NavLink>
                {/* <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/new">New Language</NavLink> */}
            </div>
        </nav>
    </div>
    )
}
export default Header
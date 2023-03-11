import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo-langdeck-w_fpt-v1.png';
import HeaderTranslatorCard from "./HeaderTranslatorCard"
import HeaderThemeCard from "./HeaderThemeCard"

//<NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="translators/">About</NavLink>
const Header  = () => {
    const menuItems = useContext(cardContext);
    //console.log(menuItems.language.language_uid)
    return (
    <>        
    <div className="logo h-full shadow-lg p-4 overflow-hidden">
    
        <nav className="flex justify-between relative items-center h-16">
            <div><Link to="/" className="flex items-center pl-4 text-xl text-black para1"><img className="logo" src={logo}></img></Link></div>
            <div className="flex"><HeaderTranslatorCard></HeaderTranslatorCard></div>
            <div className="flex"><HeaderThemeCard></HeaderThemeCard></div>
            <div className="pr-8 text-black para1">
                <Link to="/translators" className="pl-1 text-xl text-black para1">Translate</Link>
            </div>
            
            <div>{menuItems.language.language_name_en}</div>
            <div>{menuItems.language.language_name_en}</div>
        </nav>
    </div>
    
    </>  
    )
}
export default Header
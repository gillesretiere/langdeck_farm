import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo-langdeck-w_fpt-v1.png';

const Footer = () => {
  return (
    <>
      <div className="logo h-full shadow-inner p-5 overflow-hidden">
        <nav className="flex justify-start relative items-center h-16">
            <div>Design by </div>
            <Link to="/" className="pl-8 text-xl text-black para1"><img className="logo" src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682945862/hammer-marteau/logo-hm-red.png"></img></Link>
            <div>(c) Langdeck 2023</div>       
        </nav>
      </div>  
    </>
    )
}
export default Footer
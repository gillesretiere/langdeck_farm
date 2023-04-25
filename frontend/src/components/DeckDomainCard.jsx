import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckDomainCard = ({domains}) => {
  let {domain, themes} = domains;
  const menuItems = useContext(cardContext);
  menuItems.domains=domains
  menuItems.themes=themes
  menuItems.component="DeckDomainCard"  
  const shoot = () => {
    menuItems.domain=domain
  }  
  return (
    <section data-theme="dark">
      <div className="box" onClick={shoot}>
        <Link to={`/deckThemes/${domain}`}>
            <div className="flex flex-row justify-start items-center p-3">
                <span className="flex justify-start"><img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682101321/langdeck/medical-history.png" alt="medical" /></span>
                <span className="flex justify-start">
                  <div className="flex flex-col items-start justify-items-start">
                  <span className="split basis-1/2 pl-5 pr-2 text-xl">{domain}</span>
                  <span className="split basis-1/2 pl-5 pr-2">{domain}</span>
                  </div>
                </span>
              </div>            
        </Link>    
      </div>
    </section>   
  )
}

export default DeckDomainCard
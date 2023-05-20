import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckDomainCard = ({domains}) => {
  let {domain, domain_translated, domain_img, themes} = domains;
  const menuItems = useContext(cardContext);
  // menuItems.domains=domains
  menuItems.themes=themes
  menuItems.component="DeckDomainCard"  
  const shoot = () => {
    menuItems.domain=domain
    menuItems.domains=domains
  }  
  return (
    <section data-theme="light">
      <div className="box" onClick={shoot}>
        <Link to={`/deckThemes/${domain}`}>
            <div className="translator-card-wrapper">
              <div className="translator-card-header">
                <div className="translator-card-langtitle">{domain}</div>
              </div>              
              <div className="translator-card-lang">{domain_translated}</div>
              <div className="translator-card-sep"></div>         
              <div className="deck-card-image"><img className="deck-card-image" src={domain_img} alt="Illustration domaine"></img></div>                    
              <div className="translator-card-sep"></div>  
            <div className="translator-card-footer">langdeck</div>      
            </div>            
        </Link>    
      </div>
    </section>   
  )
}

export default DeckDomainCard
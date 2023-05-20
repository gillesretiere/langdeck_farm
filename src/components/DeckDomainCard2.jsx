import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckDomainCard2 = ({domains}) => {
  let {domain, domain_translated, themes} = domains;
  const menuItems = useContext(cardContext);
  menuItems.domains=domains
  menuItems.themes=themes
  menuItems.component="DeckDomainCard"  
  const shoot = () => {
    menuItems.domain=domain
    menuItems.domains=domains
  }    
    return (
        <>
        <section data-theme="light">
          <div className="box" onClick={shoot}>
            <Link to={`/deckThemes/${domain}`}>
                <div className="simple-card-wrapper">
                  <div className="simple-card-header">
                    <div className="simple-card-title">{domain}</div>
                  </div>     
                  <div className="simple-card-layout">         
                    <div className="simple-card-text">{domain_translated}</div>
                    <div className="simple-card-subtext">{domain_translated}</div>
                  </div>
                  <div className="simple-card-footer"></div>
                </div>            
            </Link>    
          </div>
        </section>  
        </> 
      )
}

export default DeckDomainCard2
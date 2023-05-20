import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckThemeCard = ({themes}) => {
  let {theme,theme_translated, theme_img, topics} = themes
  const menuItems = useContext(cardContext);
  menuItems.topics=topics
  menuItems.themes=themes
  menuItems.component="DeckThemeCard"    
  //console.log(menuItems.domain)
  const shoot = () => {
    menuItems.theme=theme
    menuItems.themes=themes;
    console.log(themes);
  }  
  
  return (
    <section data-theme="light">
      <div className="box" onClick={shoot}>
        <Link to={`/deckTopics/${theme}`}>
          <div className="translator-card-wrapper">
              <div className="translator-card-header">
                <div className="translator-card-langtitle">{theme}</div>
              </div>              
              <div className="translator-card-lang">{theme_translated}</div>
              <div className="translator-card-sep"></div>                          
            <div className="deck-card-image"><img className="deck-card-image" src={theme_img} alt="illustration for theme"></img></div>
            <div className="translator-card-sep"></div>  
            <div className="translator-card-footer"></div>              
          </div>    
        </Link>    
      </div>
    </section>  
  )
}

export default DeckThemeCard
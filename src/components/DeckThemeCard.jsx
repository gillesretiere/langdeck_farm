import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckThemeCard = ({themes}) => {
  let {theme, topics} = themes
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
    <section data-theme="dark">
      <div className="box" onClick={shoot}>
        <Link to={`/deckTopics/${theme}`}>
        <div className="flex flex-row justify-start items-center p-3">
                <span className="flex justify-start"><img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682101321/langdeck/medical-history.png" alt="medical" /></span>
                <span className="flex justify-start">
                  <div className="flex flex-col items-start justify-items-start">
                  <span className="split basis-1/2 pl-5 pr-2 text-xl">{theme}</span>
                  <span className="split basis-1/2 pl-5 pr-2">{theme}</span>
                  </div>
                </span>
              </div>   
        </Link>    
      </div>
    </section>  
  )
}

export default DeckThemeCard
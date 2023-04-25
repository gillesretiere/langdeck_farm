import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckStoryCard = ({stories}) => {
  let {story, phrases} = stories
  const menuItems = useContext(cardContext);
  menuItems.stories=stories
  menuItems.phrases=phrases
  menuItems.component="DeckStoryCard"    
  const shoot = () => {
    menuItems.story=story
    menuItems.stories=stories
  }
   console.log(stories);
  return (
    <section data-theme="dark">
      <div className="box" onClick={shoot}>
        <Link to={`/deckPhrases/${story}`}>
        <div className="flex flex-row justify-start items-center p-3">
                <span className="flex justify-start"><img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682101321/langdeck/medical-history.png" alt="medical" /></span>
                <span className="flex justify-start">
                  <div className="flex flex-col items-start justify-items-start">
                  <span className="split basis-1/2 pl-5 pr-2 text-xl">{story}</span>
                  <span className="split basis-1/2 pl-5 pr-2">{story}</span>
                  </div>
                </span>
              </div>   
        </Link>    
      </div>
    </section>  
  )
}

export default DeckStoryCard
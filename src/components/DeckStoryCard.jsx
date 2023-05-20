import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckStoryCard = ({stories}) => {
  let {story, story_translated, story_img, story_note, phrases} = stories
  const menuItems = useContext(cardContext);
  menuItems.stories=stories
  menuItems.phrases=phrases
  menuItems.component="DeckStoryCard"    
  const shoot = () => {
    menuItems.story=story
    menuItems.stories=stories
  }
  //  console.log(stories);
  return (
    <section data-theme="light">
      <div className="box" onClick={shoot}>
        <Link to={`/deckPhrases/${story}`}>
        <div className="translator-card-wrapper">
            <div className="translator-card-header">
                <div className="translator-card-langtitle">{story}</div>
            </div>                        
            <div className="translator-card-lang">{story_translated}</div>
            <div className="translator-card-sep"></div>                          
            <div className="deck-card-image"><img className="deck-card-image" src={story_img} alt="" /></div>
            <div className="translator-card-sep"></div>  
            <div className="translator-card-footer"></div>
        </div>
        </Link>    
      </div>
    </section>  
  )
}

export default DeckStoryCard
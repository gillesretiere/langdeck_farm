import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";

const DeckStoryHeader = ({stories}) => {
  const menuItems = useContext(cardContext);
  menuItems.component="DeckStoryHeader"
  let {story, story_translated, story_img, story_note, story_note_translated} = stories
  let translator = menuItems.translator
  let domain = menuItems.domain
  let topic = menuItems.topic
  let themes = menuItems.themes
  let theme = themes.theme    
  return (
    <>
    
    <div className="m-3">
      <span className="py-1 px-2 mr-2 box-linga">{translator.language_name_fr}</span>
      <span className="py-1 px-2 mr-2 box-domain">{domain}</span>
      <span className="py-1 px-2 mr-2 box-topic">{topic}</span>
    </div>
    <div className="p-3 story-container">
        <div className="story-img-wrap">
            <img src={story_img} alt="https://unsplash.com/"></img>
        </div>
        <div className="story-details">
            <div className="story-name-translated">{story_translated}</div>
            <div className="story-name">{story}</div>
            <div className="story-intro-translated">{story_note_translated}</div>
            <div className="story-intro">{story_note}</div>
        </div>   
    </div>    

    </>
  )
}

export default DeckStoryHeader
import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import CurrentSelectionDeck from "../components/CurrentSelectionDeck"
import DeckPhraseIterator from "../components/DeckPhraseIterator"
import DeckStoryHeader from "../components/DeckStoryHeader"
import DeckStoryIterator from "../components/DeckStoryIterator"

import { cardContext } from "../App";

const DeckPhrases = () => {
    let {id} = useParams();
    const menuItems = useContext(cardContext);
    menuItems.component="DeckPhrases"
    let translator = menuItems.translator
    let themes = menuItems.themes
    let theme = themes.theme
    let stories = menuItems.stories
    let domains = stories.domains
    let topics = menuItems.topics
    let domain = menuItems.domain
    let topic = menuItems.topic
    let phrases = menuItems.phrases
    console.log(stories)


  return (
    <Layout>
        <div className="story-wrapper">  
          <div className="grid sm:grid-cols-1">
            {/* Component : image + Story descript°
            */}
            <DeckStoryHeader stories={stories}></DeckStoryHeader>

            {/* Component : Story
            */}            
            <div className="grid sm:grid-cols-1">
            {Array.isArray(phrases) ? phrases.map(
                    el => {
                    return (                               
                      <DeckPhraseIterator key={el._id} phrases = {el} />                    
                    )
                })
                : <div>{phrases}</div>}
              
                {/*<DeckStoryIterator phrases={phrases}/> */}
            </div>              
          </div>
        </div> 

    </Layout>
  )
}

export default DeckPhrases

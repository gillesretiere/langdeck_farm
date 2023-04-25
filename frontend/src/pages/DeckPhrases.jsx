import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import CurrentSelectionDeck from "../components/CurrentSelectionDeck"
import DeckPhraseIterator from "../components/DeckPhraseIterator"
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
    //console.log(phrases)


  return (
    <Layout>
        <div className="mx-8">  
            {/* Component : image + Story descript°
            */}
            <div><img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682450081/langdeck/assets/images/atthepharmacy.png" alt="https://unsplash.com/fr/photos/NNpo-liY5aU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"></img></div>
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

    </Layout>
  )
}

export default DeckPhrases

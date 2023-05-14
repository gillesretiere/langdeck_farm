import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import DeckSelection from "../components/DeckSelection"
import DeckStoryIterator from "../components/DeckStoryIterator"

import { cardContext } from "../App";

const DeckStories = () => {
    let {id} = useParams();
    const menuItems = useContext(cardContext);
    menuItems.component="DeckStories"
    let translator = menuItems.translator
    let themes = menuItems.themes
    let theme = themes.theme
    let stories = menuItems.stories
    let domains = stories.domains
    let topics = menuItems.topics
    let domain = menuItems.domain
    let topic = menuItems.topic
    console.log(topics)


  return (
    <Layout>
        <div>  
            <div><DeckSelection /></div>  
            <div className="mb-4">&nbsp;</div>
            <div className="grid sm:grid-cols-1">
                {Array.isArray(stories) ? stories.map(
                    el => {
                    return (                               
                      <DeckStoryIterator key={el._id} stories = {el} />                    
                    )
                })
                : <div>{stories}</div>}
            </div>              
      
        </div> 

    </Layout>
  )
}

export default DeckStories
import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import DeckSelection from "../components/DeckSelection"
import DeckTopicIterator from "../components/DeckTopicIterator"

import { cardContext } from "../App";

const DeckTopics = () => {
    let {id} = useParams();
    const menuItems = useContext(cardContext);
    menuItems.component="DeckTopics"
    let translator = menuItems.translator
    let themes = menuItems.themes
    let theme = themes.theme
    let stories = menuItems.stories
    let domains = stories.domains
    let topics = menuItems.topics
    let domain = menuItems.domain

    // console.log(topics)
    for (var key in themes) {
        if (themes[key]["theme"]===id) {
          //console.log(themes[key])
          topics = themes[key]["topics"]
        }
      }

  return (
    <Layout>
        <div>  
            <div><DeckSelection /></div>  
            <div className="mb-4">&nbsp;</div>
            <div className="grid sm:grid-cols-1">
                {Array.isArray(topics) ? topics.map(
                    el => {
                    return (                               
                      <DeckTopicIterator key={el._id} topics = {el} />                    
                    )
                })
                : <div>{topics}</div>}
            </div>              
      
        </div> 

    </Layout>
  )
}

export default DeckTopics
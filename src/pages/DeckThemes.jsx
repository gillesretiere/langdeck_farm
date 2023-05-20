import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import CurrentSelectionDeck from "../components/CurrentSelectionDeck"
import DeckThemeIterator from "../components/DeckThemeIterator"
import DeckSelection from "../components/DeckSelection"
import { cardContext } from "../App";

const DeckThemes = () => {
    let {id} = useParams();
    const menuItems = useContext(cardContext);
    menuItems.component="DeckThemes"
    let translator = menuItems.translator
    let themes = menuItems.themes
    let theme = themes.theme
    let stories = menuItems.stories
    let domains = stories.domains
    menuItems.domain=id
    console.log(menuItems.domain)
    for (var key in domains) {
      if (domains[key]["domain"]===id) {
        console.log(domains[key])
        themes = domains[key]["themes"]
      }
    }

  return (
    <Layout>
        <div className="mx-8">  
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {Array.isArray(themes) ? themes.map(
                    el => {
                    return (                               
                      <DeckThemeIterator key={el._id} themes = {el} />                    
                    )
                })
                : <DeckThemeIterator themes = {themes} />}
            </div>              
        </div> 

    </Layout>
  )
}

export default DeckThemes
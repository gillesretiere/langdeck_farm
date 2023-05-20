import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";

import DeckSelectionItemLanguage from "../components/DeckSelectionItemLanguage"
import DeckSelectionItemDomain from "../components/DeckSelectionItemDomain"
import DeckSelectionItemTheme from "../components/DeckSelectionItemTheme"
import DeckSelectionItemTopic from "../components/DeckSelectionItemTopic"

// https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation

const DeckMemorizer = () => {
    const menuItems = useContext(cardContext);
    let translator = menuItems.translator;
    let domains = menuItems.domains
    let themes = menuItems.themes
    let topics = menuItems.topics
    let story = menuItems.story
    console.log(domains)

  return (
    <>
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul>
            <li><a href="#">Home</a></li>
            {translator && (<li><a href="#">{translator.language_name_fr}</a></li>) }
            {domains && (<li><a href="#">{domains.domain}</a></li>) }
            {themes && (<li><a href="#">{themes.theme}</a></li>) }
            {topics && (<li><a href="#">{topics.topic}</a></li>) }
            {story && (<li><span aria-current="page">{story}</span></li> )}
        </ul>
    </nav>
    </>
  )
}

export default DeckMemorizer
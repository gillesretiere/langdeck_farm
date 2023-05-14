import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";

import DeckSelectionItemLanguage from "../components/DeckSelectionItemLanguage"
import DeckSelectionItemDomain from "../components/DeckSelectionItemDomain"
import DeckSelectionItemTheme from "../components/DeckSelectionItemTheme"
import DeckSelectionItemTopic from "../components/DeckSelectionItemTopic"

const DeckSelection = () => {
    const menuItems = useContext(cardContext);
    let translator = menuItems.translator;
    let domains = menuItems.domains
    let themes = menuItems.themes
    let topics = menuItems.topics
    let story = menuItems.story

  return (
    <>
      <div className="deck-selected">
        <h1>DECK</h1>
        <div><DeckSelectionItemLanguage translator={translator}></DeckSelectionItemLanguage></div>
        <div><DeckSelectionItemDomain domains={domains}></DeckSelectionItemDomain></div>
        <div><DeckSelectionItemTheme themes={themes}></DeckSelectionItemTheme></div>
        <div><DeckSelectionItemTopic topics={topics}></DeckSelectionItemTopic></div>
      </div>
    </>
  )
}

export default DeckSelection
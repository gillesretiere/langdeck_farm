import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";
import { Link } from "react-router-dom"
import CurSelCardLanguage from "../components/CurSelCardLanguage"
import CurSelCardDomain from '../components/CurSelCardDomain'
import CurSelCardTheme from '../components/CurSelCardTheme'
import CurSelCardTopic from '../components/CurSelCardTopic'
import CurSelCardStory from '../components/CurSelCardStory'
import CurrentSelectionCard from '../components/CurrentSelectionCard'

const CurrentSelectionDeck = () => {    
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">     
        <CurrentSelectionCard></CurrentSelectionCard> 
    </div>
  )
}

export default CurrentSelectionDeck
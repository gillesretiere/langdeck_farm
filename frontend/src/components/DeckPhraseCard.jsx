import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";
import AudioPlayerWWW from "../components/AudioPlayerWWW"
import KeyWordIterator from "../components/KeyWordIterator"

const DeckPhraseCard = ({phrases}) => {
  let {phrase, words} = phrases
  const menuItems = useContext(cardContext);
  menuItems.component="DeckPhraseCard"    
  let vk_lemma = eval(phrase.vk_lemma);
  
  console.log(phrases);
  return (
    <section>
      <div className="box-phrase">
          <div className="flex flex-row justify-start items-center p-3">
            <span className="flex justify-start"><AudioPlayerWWW path={phrase.audio_public_url}>CDN Mode</AudioPlayerWWW></span>
            <span className="flex justify-start">
              <div className="flex flex-col items-start justify-items-start">
                <span className="split basis-1/3 pl-5 pr-2 text-xl text-[#43BED9]">{phrase.translation}</span>
                <span className="split basis-1/3 pl-5 pr-2">{phrase.phrase}</span>
                <span className="split basis-1/3 p-5">
                  <span className="lemma-label">Keywords</span>
                  <KeyWordIterator words = {words}></KeyWordIterator>
                </span>
                
              </div>              
            </span>
          </div>    
      </div>
    </section>  
  )
}

export default DeckPhraseCard

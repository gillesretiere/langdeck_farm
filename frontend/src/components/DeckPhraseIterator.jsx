import React from 'react'

import DeckPhraseCard from "../components/DeckPhraseCard"

const DeckPhraseIterator = ({phrases}) => {
    let {phrase} = phrases;
    console.log(phrases);    
    
  return (
        <>
            {Array.isArray(phrases) ? phrases && phrases.sort((a, b) => a.phrase.num_id > b.phrase.num_id?-1:1).map(
                el => {
                return (                               
                    <DeckPhraseCard key={el._id} phrases = {el.phrase} />                     
                )
            })
            : <DeckPhraseCard phrases = {phrases} /> }
        </>
  )
}

export default DeckPhraseIterator
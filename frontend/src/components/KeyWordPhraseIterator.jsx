import React from 'react'
import KeyWordPhraseCard from "../components/KeyWordPhraseCard"

const KeyWordPhraseIterator = ({w_phrase}) => {
    
  return (
    <>
        {Array.isArray(w_phrase) ? w_phrase.map(
            el => {
            return (                               
                <KeyWordPhraseCard key={el._id} w_phrase = {el} />                     
            )
            })
            : <KeyWordPhraseCard w_phrase = {w_phrase} /> }    
        
    </>
  )
}

export default KeyWordPhraseIterator
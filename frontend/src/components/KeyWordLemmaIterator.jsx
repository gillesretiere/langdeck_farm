import React from 'react'
import KeyWordLemmaCard from "../components/KeyWordLemmaCard"

const KeyWordLemmaIterator = ({w_lemma}) => {
    
  return (
    <>
        {Array.isArray(w_lemma) ? w_lemma.map(
            el => {
            return (                               
                <KeyWordLemmaCard key={el._id} w_lemma = {el} />                     
            )
            })
            : <KeyWordLemmaCard w_lemma = {w_lemma} /> }    
        
    </>
  )
}

export default KeyWordLemmaIterator
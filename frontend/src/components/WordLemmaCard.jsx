import React from 'react'
import ExpressionCard from "../components/ExpressionCard"

const KeyWordLemmaIterator = ({w_lemma}) => {
    
  return (
    <>
        {Array.isArray(w_lemma) ? w_lemma.map(
            el => {
            return (                               
                <ExpressionCard key={el._id} w_lemma = {el} />                     
            )
            })
            : <ExpressionCard w_lemma = {w_lemma} /> }    
        
    </>
  )
}

export default KeyWordLemmaIterator
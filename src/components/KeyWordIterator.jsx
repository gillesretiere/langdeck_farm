import React from 'react'
import KeyWordCard from "../components/KeyWordCard"

const KeyWordIterator = ({words}) => {
    
  return (
    <>
    {Array.isArray(words) ? words.map(
        el => {
        return (                               
            <KeyWordCard key={el._id} words = {el} />                     
        )
        })
        : <KeyWordCard words = {words} /> }    
        
    </>
  )
}

export default KeyWordIterator
import React from 'react'
import DeckDomainCard from "../components/DeckDomainCard"

const DeckDomainIterator = ({languageStories}) => {
    let {language, domains} = languageStories;
    // console.log(languageStories);    
  return (
    <>
            {Array.isArray(domains) ? domains.map(
                el => {
                return (                               
                    <DeckDomainCard key={el._id} domains = {el} />                     
                )
            })
            : <DeckDomainCard domains = {domains} /> }
    </>    
  )
}

export default DeckDomainIterator
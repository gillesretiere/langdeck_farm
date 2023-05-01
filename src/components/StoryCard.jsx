import React from 'react'
import StoryDomainCard from "../components/StoryDomainCard"

const StoryCard = ({languageStories}) => {
    let {language, domains} = languageStories;
    console.log(languageStories);
  return (
    <>
    <div>
     <hr/>
    <div>StoryCard {language}</div>
    <div>Choose domain : </div>
          
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
      {Array.isArray(domains) ? domains.map(
        el => {
          return (                               
            <StoryDomainCard key={el._id} domains = {el} />                     
          )
      })
      : <StoryDomainCard domains = {domains} /> }
          
      </div>  
      </div>
      </>  
  )
}

export default StoryCard
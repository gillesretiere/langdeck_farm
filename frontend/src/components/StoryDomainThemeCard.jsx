import React from 'react'
import StoryDomainThemeTopicCard from "../components/StoryDomainThemeTopicCard"

const StoryDomainThemeCard = ({themes}) => {
    let {theme, topics} = themes;
  return (
    <div>StoryDomainThemeCard {theme} 
    <div>Choose topic : </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {Array.isArray(topics) ? topics.map(
            el => {
              return (                               
                <StoryDomainThemeTopicCard key={el._id} topics = {el} />                     
              )
          })
          : <StoryDomainThemeTopicCard topics = {topics} /> }
              
          </div>      
    
    </div>
  )
}

export default StoryDomainThemeCard
import React from 'react'
import StoryDomainThemeTopicStoryCard from "../components/StoryDomainThemeTopicStoryCard"




const StoryDomainThemeTopicCard = ({topics}) => {
    let {topic, stories} = topics;
  return (
    <div>StoryDomainThemeTopicCard {topic} 
    <div>Choose story : </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {Array.isArray(stories) ? stories.map(
            el => {
              return (                               
                <StoryDomainThemeTopicStoryCard key={el._id} stories = {el} />                     
              )
          })
          : <StoryDomainThemeTopicStoryCard stories = {stories} /> }
              
          </div>      
    
    </div>
  )
}

export default StoryDomainThemeTopicCard
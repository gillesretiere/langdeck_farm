import React from 'react'
import StoryDomainThemeCard from "../components/StoryDomainThemeCard"


const StoryDomainCard = ({domains}) => {
    let {domain, themes} = domains;
  return (
    <div>StoryDomainCard {domain} 
    <div>Choose theme : </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {Array.isArray(themes) ? themes.map(
            el => {
              return (                               
                <StoryDomainThemeCard key={el._id} themes = {el} />                     
              )
          })
          : <StoryDomainThemeCard themes = {themes} /> }
              
          </div>      
    
    </div>
  )
}

export default StoryDomainCard
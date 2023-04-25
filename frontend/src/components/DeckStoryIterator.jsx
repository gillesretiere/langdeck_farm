import React from 'react'
import DeckStoryCard from "../components/DeckStoryCard"

const DeckStoryIterator = ({stories}) => {
    let {story, phrases} = stories;
    //console.log(themes);    
  return (
        <>
            {Array.isArray(stories) ? stories.map(
                el => {
                return (                               
                    <DeckStoryCard key={el._id} stories = {el} />                     
                )
            })
            : <DeckStoryCard stories = {stories} /> }
        </>
  )
}

export default DeckStoryIterator
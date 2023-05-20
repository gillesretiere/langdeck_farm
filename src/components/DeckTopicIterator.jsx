import React from 'react'
import DeckTopicCard from "../components/DeckTopicCard"

const DeckTopicIterator = ({topics}) => {
    let {topic, stories} = topics;
    // console.log(topics);    
  return (
        <div className="">
            {Array.isArray(topics) ? topics.map(
                el => {
                return (                               
                    <DeckTopicCard key={el._id} topics = {el} />                     
                )
            })
            : <DeckTopicCard topics = {topics} /> }
        </div>
  )
}

export default DeckTopicIterator
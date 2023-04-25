import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckTopicCard = ({topics}) => {
  let {topic, stories} = topics
  const menuItems = useContext(cardContext);
  let topic_id = topic.split(" ").join("").toLowerCase();
  // menuItems.topics=topics
  menuItems.component="DeckTopicCard"    
  const shoot = () => {
    menuItems.topic=topic
    menuItems.stories=stories
  }


  //console.log(topics);
  return (
    <section data-theme="dark">
      <div className="box" onClick={shoot}>
        <Link to={`/deckStories/${topic_id}`}>
        <div className="flex flex-row justify-start items-center p-3">
                <span className="flex justify-start"><img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682101321/langdeck/medical-history.png" alt="medical" /></span>
                <span className="flex justify-start">
                  <div className="flex flex-col items-start justify-items-start">
                  <span className="split basis-1/2 pl-5 pr-2 text-xl">{topic}</span>
                  <span className="split basis-1/2 pl-5 pr-2">{topic}</span>
                  </div>
                </span>
              </div>   
        </Link>    
      </div>
    </section>  
  )
}

export default DeckTopicCard
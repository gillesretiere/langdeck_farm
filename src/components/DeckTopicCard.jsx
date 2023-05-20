import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { cardContext } from "../App";

const DeckTopicCard = ({topics}) => {
  let {topic, topic_translated, topic_img, stories} = topics
  const menuItems = useContext(cardContext);
  let topic_id = topic.split(" ").join("").toLowerCase();
  // menuItems.topics=topics
  menuItems.component="DeckTopicCard"    
  const shoot = () => {
    menuItems.topic=topic
    menuItems.topics=topics
    menuItems.stories=stories
  }


  //console.log(topics);
  return (
    <section data-theme="light">
      <div className="box" onClick={shoot}>
        <Link to={`/deckStories/${topic_id}`}>
          <div className="translator-card-wrapper">
            <div className="translator-card-header">
                <div className="translator-card-langtitle">{topic}</div>
            </div>    
            <div className="translator-card-lang">{topic_translated}</div>
            <div className="translator-card-sep"></div>                          
            <div className="deck-card-image"><img className="deck-card-image" src={topic_img} alt="" /></div>
            <div className="translator-card-sep"></div>  
            <div className="translator-card-footer"></div>
          </div>
        </Link>    
      </div>
    </section>  
  )
}

export default DeckTopicCard
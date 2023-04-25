import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";
import { Link } from "react-router-dom"

const CurrentSelectionCard = () => {
  const menuItems = useContext(cardContext);
  let translator = menuItems.translator;
  let domain = menuItems.domain
  let theme = menuItems.theme
  let topic = menuItems.topic
  let story = menuItems.story

  return (
    <>
      <section data-theme="dark">
      <div className="box">
          <Link to={`/deckDomains/${translator.language_uid}`}>
              <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
                <span className="split basis-1/2 pr-2 flex justify-center"><img className="h-10 w-10 rounded-full" src={translator.flag_icon} alt="" /></span>
                <span className="split basis-1/2 pr-2 flex justify-start">
                  <div className="flex flex-col items-start justify-items-start">
                  <span className="split basis-1/2 pl-5 pr-2 text-xl">{translator.language_name_en}</span>
                  <span className="split basis-1/2 pl-5 pr-2">{translator.language_name_native}</span>
                  </div>
                </span>
              </div>
          </Link>    
        </div>
        <div className="box">
          <Link to={`/deckDomains/${translator.language_uid}`}>
              <div className="flex flex-col justify-start items-center p-3">
                <span className="py-1 px-2 ml-3 mr-3">{domain}</span>
                <span className="py-1 px-2 ml-3 mr-3">{theme}</span>
                <span className="py-1 px-2 ml-3 mr-3">{topic}</span>
                <span className="py-1 px-2 ml-3 mr-3">{story}</span>
              </div>                
          </Link>    
        </div>        
      </section>    
    </>
  )
}

export default CurrentSelectionCard
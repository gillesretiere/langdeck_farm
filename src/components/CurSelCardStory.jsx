import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";
import { Link } from "react-router-dom"

const CurSelCardStory = () => {
  const menuItems = useContext(cardContext);
  let translator = menuItems.translator;
  let domain = menuItems.domain
  let theme = menuItems.theme
  let story = menuItems.story

  return (
    <>
      <section data-theme="dark">
        <div className="box">
          <Link to={`/deckDomains/${translator.language_uid}`}>
              <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
                <span className="split basis-1/2 pr-2 flex justify-center"><img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1682101321/langdeck/medical-history.png" alt="medical" /></span>
                <span className="split basis-1/2 pr-2 flex justify-start">
                  <div className="flex flex-col items-start justify-items-start">
                  <span className="split basis-1/2 pl-5 pr-2 text-xl">{story}</span>
                  <span className="split basis-1/2 pl-5 pr-2">{story}</span>
                  </div>
                </span>
              </div>
          </Link>    
        </div>
      </section>    
    </>
  )
}

export default CurSelCardStory
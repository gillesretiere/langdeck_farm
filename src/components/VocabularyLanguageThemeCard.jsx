import React from 'react'
import { Link } from "react-router-dom"
import ThemeCard from "../components/ThemeCard"

const VocabularyLanguageThemeCard = ({languageThemes}) => {
  let {language_uid, themes} = languageThemes;
  // console.log(languageThemes)
  return (
    <>
<section data-theme="dark">
  <div class="box">
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="split basis-1/2 pr-2 flex justify-center">{language_uid}</span>
          <span className="split basis-1/2 pr-2 flex justify-start">
            <div className="flex flex-col items-start justify-items-start">
            {Array.isArray(themes) ? themes.map(
            el => {
              return (                               
                <ThemeCard key={el._id} theme_item = {el} />                     
              )
          })
          : <ThemeCard theme_item = {languageThemes} /> }              
            </div>
          </span>
        </div>
  </div>
</section>    

    </>
  )
}

export default VocabularyLanguageThemeCard
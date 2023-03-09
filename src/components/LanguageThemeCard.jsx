import React from 'react'
import { Link } from "react-router-dom"
import ThemeCard from "../components/ThemeCard"

const LanguageThemeCard = ({languageThemes}) => {
  let {language_uid, themes} = languageThemes;
  // console.log(languageThemes)
  return (
    <>
        {Array.isArray(themes) ? themes.map(
        el => {
            return (                               
            <ThemeCard key={el._id} theme_item = {el} />                     
            )
        })
        : <ThemeCard theme_item = {languageThemes} /> }              
    </>
  )
}

export default LanguageThemeCard
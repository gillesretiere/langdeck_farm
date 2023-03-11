import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { cardContext } from "../App";
import ThemeCard from "../components/ThemeCard"

const LanguageThemeCard = ({languageThemes}) => {
  let {language_uid, themes} = languageThemes;
  const menuItems = useContext(cardContext);
  const selectedThemeFunction = (selectedTheme) => {
    menuItems.theme.theme=selectedTheme;
    };
  // console.log(languageThemes)
  return (
    <>
        {Array.isArray(themes) ? themes.map(
        el => {
            return (                               
            <ThemeCard key={el._id} theme_item = {el} selectedThemeFunction={selectedThemeFunction} />                     
            )
        })
        : <ThemeCard theme_item = {languageThemes} /> }              
    </>
  )
}

export default LanguageThemeCard
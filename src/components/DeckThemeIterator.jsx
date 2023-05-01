import React from 'react'
import DeckThemeCard from "../components/DeckThemeCard"

const DeckThemeIterator = ({themes}) => {
    let {theme, topics} = themes;
    //console.log(themes);    
  return (
        <>
            {Array.isArray(themes) ? themes.map(
                el => {
                return (                               
                    <DeckThemeCard key={el._id} themes = {el} />                     
                )
            })
            : <DeckThemeCard themes = {themes} /> }
        </>
  )
}

export default DeckThemeIterator
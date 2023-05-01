import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { cardContext } from "../App";

const ThemeCard = ({theme_item,selectedThemeFunction}) => {
    let {language_uid, theme, alpha_index} = theme_item;
    const menuItems = useContext(cardContext);
    console.log(theme_item);

    const shoot = () => {
      //menuItems.theme.theme=theme;
      menuItems.theme = theme_item
      // menuItems.theme.alpha_index=alpha_index;
      console.log(menuItems.theme);
    }

  return (
<section data-theme="dark">
  <div className="box">
    <Link to={`/themevocabularies/${theme}`}>
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
            <span className="pr-2 text-xl" onClick={shoot}>{theme}</span>
        </div>
    </Link>    
  </div>
</section>  
  )
}

export default ThemeCard